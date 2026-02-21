import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Coffee, ArrowRight, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface AIRoastFinderProps {
  onSelectProduct: (product: Product) => void;
}

export default function AIRoastFinder({ onSelectProduct }: AIRoastFinderProps) {
  const [mood, setMood] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    productId: string;
    reason: string;
  } | null>(null);

  const findRoast = async () => {
    if (!mood.trim()) return;
    
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Based on this user mood: "${mood}", recommend one of these coffee products: ${JSON.stringify(PRODUCTS.map(p => ({ id: p.id, name: p.name, description: p.description })))}. 
        Return ONLY a JSON object with "productId" and "reason" (a short, poetic explanation of why it matches the mood).`,
        config: {
          responseMimeType: "application/json"
        }
      });

      const result = JSON.parse(response.text || '{}');
      setRecommendation(result);
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const recommendedProduct = PRODUCTS.find(p => p.id === recommendation?.productId);

  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <div className="bg-white/50 border border-mocha/5 rounded-[48px] p-12 md:p-24 soft-shadow relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-mocha/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-beige/20 rounded-full blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-mocha">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold tracking-[0.3em] uppercase text-[10px]">AI Sommelier.</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-serif font-bold text-espresso tracking-tight leading-none">
                Find your <br />
                <span className="text-mocha italic">Morning Ritual.</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-md">
                Tell us how you're feeling, and our AI will curate the ideal roast for your current state of mind.
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && findRoast()}
                  placeholder="How are you feeling today?"
                  className="w-full bg-transparent border-b border-mocha/20 py-6 text-xl font-serif italic text-espresso placeholder:text-text-secondary/30 focus:outline-none focus:border-mocha transition-all"
                />
                <button 
                  onClick={findRoast}
                  disabled={isGenerating || !mood.trim()}
                  className="absolute right-0 bottom-6 text-mocha hover:text-espresso transition-colors disabled:opacity-30"
                >
                  {isGenerating ? <Loader2 className="w-6 h-6 animate-spin" /> : <ArrowRight className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!recommendation && !isGenerating && (
                <motion.div 
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-6"
                >
                  <div className="w-24 h-24 bg-mocha/5 rounded-full flex items-center justify-center mx-auto">
                    <Coffee className="w-10 h-10 text-mocha/10" />
                  </div>
                  <p className="text-text-secondary italic font-serif">Awaiting your mood...</p>
                </motion.div>
              )}

              {isGenerating && (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-6"
                >
                  <div className="relative w-24 h-24 mx-auto">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-4 border-mocha/10 border-t-mocha rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-mocha animate-pulse" />
                    </div>
                  </div>
                  <p className="text-mocha font-medium animate-pulse">Consulting the beans...</p>
                </motion.div>
              )}

              {recommendation && recommendedProduct && !isGenerating && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="w-full"
                >
                  <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-10 border border-mocha/10 flex flex-col md:flex-row gap-10 items-center">
                    <div className="w-40 h-40 rounded-[24px] overflow-hidden flex-shrink-0 bg-cream/50 p-4">
                      <img 
                        src={recommendedProduct.image} 
                        alt={recommendedProduct.name}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 space-y-6 text-center md:text-left">
                      <div className="space-y-2">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                          <span className="text-gold font-bold text-[10px] uppercase tracking-[0.3em]">Perfect Match.</span>
                          <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 bg-gold rounded-full" />)}
                          </div>
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-espresso">{recommendedProduct.name}.</h3>
                      </div>
                      <p className="text-text-secondary text-lg font-serif italic leading-relaxed">
                        "{recommendation.reason}"
                      </p>
                      <button 
                        onClick={() => onSelectProduct(recommendedProduct)}
                        className="text-mocha font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 pt-2 mx-auto md:mx-0 hover:gap-3 transition-all border-b border-mocha/20 pb-1"
                      >
                        View Roast Details <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
