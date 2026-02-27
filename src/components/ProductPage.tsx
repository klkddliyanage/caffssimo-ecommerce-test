import { motion } from 'motion/react';
import { Product, RoastLevel } from '../types';
import { GRIND_TYPES } from '../constants';
import { useState } from 'react';
import { ArrowLeft, Plus, Minus, Star, Share2, Heart } from 'lucide-react';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number, grind: string) => void;
}

export default function ProductPage({ product, onBack, onAddToCart }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedGrind, setSelectedGrind] = useState(GRIND_TYPES[0]);

  return (
    <div className="pt-24 pb-32 max-w-7xl mx-auto px-6">
      <motion.button 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary hover:text-mocha transition-colors mb-12 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Collection
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-[#f4f3ee] flex items-center justify-center mb-8">
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              product.image,
              'https://images.unsplash.com/photo-1497933322477-911f93bb7867?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=400'
            ].map((imgSrc, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="aspect-square rounded-2xl overflow-hidden bg-white/50 border border-mocha/5 cursor-pointer p-2"
              >
                <img 
                  src={imgSrc} 
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover rounded-xl opacity-40 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-mocha font-bold tracking-[0.3em] uppercase text-[10px]">{product.origin}</span>
                <span className="w-1 h-1 bg-mocha/20 rounded-full" />
                <span className="text-text-secondary font-bold tracking-[0.3em] uppercase text-[10px]">{product.roastLevel} Roast</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-espresso tracking-tight leading-none">
                {product.name}.
              </h1>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3 h-3 ${i < 4 ? 'fill-gold text-gold' : 'text-mocha/10'}`} />
                ))}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">4.8 / 5.0 Rating</span>
            </div>

            <p className="text-4xl font-bold text-espresso">£{product.price.toFixed(2)}</p>
          </div>

          <div className="space-y-4 border-t border-mocha/10 pt-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-espresso">The Profile.</h4>
            <p className="text-text-secondary leading-relaxed text-lg font-serif italic">
              "{product.description}"
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 border-t border-mocha/10 pt-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-espresso">Intensity.</h4>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 flex-1 rounded-full ${i < product.intensity ? 'bg-mocha' : 'bg-mocha/10'}`} 
                  />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-espresso">Notes.</h4>
              <div className="flex flex-wrap gap-2">
                {product.flavorNotes.map(note => (
                  <span key={note} className="text-xs font-bold text-mocha border-b border-mocha/20 pb-1">
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 border-t border-mocha/10 pt-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-espresso">Grind Selection.</h4>
              <div className="flex flex-wrap gap-3">
                {GRIND_TYPES.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedGrind(type)}
                    className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                      selectedGrind === type 
                        ? 'bg-espresso text-cream border-espresso shadow-xl shadow-espresso/10' 
                        : 'bg-transparent text-text-secondary border-mocha/10 hover:border-mocha'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center border border-mocha/10 rounded-full px-4 h-14 bg-white/50">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:text-mocha transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="px-6 text-sm font-bold text-espresso min-w-[50px] text-center">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:text-mocha transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <button 
                onClick={() => onAddToCart(product, quantity, selectedGrind)}
                className="flex-1 h-14 bg-espresso text-cream rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-mocha transition-all shadow-2xl shadow-espresso/20 active:scale-[0.98]"
              >
                Add to Bag — £{(product.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
