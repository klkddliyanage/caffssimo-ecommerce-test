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
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="glass rounded-[32px] p-8 md:p-16 soft-shadow relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-mocha/5 rounded-full blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-mocha">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold tracking-widest uppercase text-xs">AI Sommelier</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-espresso tracking-tight">
                Find your perfect <br />
                <span className="text-mocha italic font-serif">Morning Ritual</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Tell us how you're feeling, and our AI will curate the ideal roast for your current state of mind.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && findRoast()}
                  placeholder="e.g. 'Energetic and ready to conquer the day' or 'Cozy rainy afternoon'"
                  className="w-full bg-white border border-mocha/10 rounded-2xl py-5 px-6 text-espresso placeholder:text-text-secondary/40 focus:outline-none focus:border-mocha transition-all soft-shadow"
                />
                <button 
                  onClick={findRoast}
                  disabled={isGenerating || !mood.trim()}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-mocha text-cream rounded-xl font-bold flex items-center gap-2 hover:bg-espresso transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  Find Roast
                </button>
              </div>
            </div>
          </div>

          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!recommendation && !isGenerating && (
                <motion.div 
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-mocha/5 rounded-full flex items-center justify-center mx-auto">
                    <Coffee className="w-10 h-10 text-mocha/20" />
                  </div>
                  <p className="text-text-secondary italic">Your recommendation will appear here...</p>
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
                  <div className="bg-white rounded-3xl p-6 soft-shadow flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                      <img 
                        src={recommendedProduct.image} 
                        alt={recommendedProduct.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 space-y-2 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <span className="text-gold font-bold text-[10px] uppercase tracking-widest">Perfect Match</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-1 bg-gold rounded-full" />)}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-espresso">{recommendedProduct.name}</h3>
                      <p className="text-text-secondary text-sm italic leading-relaxed">
                        "{recommendation.reason}"
                      </p>
                      <button 
                        onClick={() => onSelectProduct(recommendedProduct)}
                        className="text-mocha font-bold text-sm flex items-center gap-2 pt-2 mx-auto md:mx-0 hover:gap-3 transition-all"
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
