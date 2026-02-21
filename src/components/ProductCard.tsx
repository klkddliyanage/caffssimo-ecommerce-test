import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { Plus, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onAddToCart: (e: React.MouseEvent) => void;
  variant?: 'default' | 'editorial';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, onAddToCart, variant = 'default' }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  if (variant === 'editorial') {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className="group cursor-pointer relative"
      >
        <div className="flex flex-col space-y-8">
          <div className="relative aspect-[4/5] overflow-hidden bg-transparent flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isHovered ? (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-beige/40 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center space-y-6 border border-mocha/10"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-mocha/10 pb-2">
                      <span className="text-[10px] uppercase tracking-widest text-text-secondary">Coffee.</span>
                      <span className="text-sm font-serif font-bold text-espresso">{product.name}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-mocha/10 pb-2">
                      <span className="text-[10px] uppercase tracking-widest text-text-secondary">Origin.</span>
                      <span className="text-sm font-serif font-bold text-espresso">{product.origin}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-mocha/10 pb-2">
                      <span className="text-[10px] uppercase tracking-widest text-text-secondary">Bag size.</span>
                      <span className="text-sm font-serif font-bold text-espresso">250g</span>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onAddToCart(e); }}
                    className="w-full py-4 bg-espresso text-cream rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-mocha transition-colors"
                  >
                    Buy Now
                  </button>
                  <button className="w-full text-[10px] font-bold uppercase tracking-[0.2em] text-espresso/40 hover:text-espresso transition-colors">
                    Read More
                  </button>
                </motion.div>
              ) : (
                <motion.img
                  key="image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-espresso tracking-tight group-hover:text-mocha transition-colors">
                {product.name}.
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed max-w-[280px] mx-auto">
                {product.description.split('.')[0]}.
              </p>
              <p className="text-lg font-bold text-espresso pt-2">£{product.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group cursor-pointer bg-white/50 rounded-3xl p-6 border border-mocha/5 hover:border-mocha/20 transition-all duration-500"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream/50 mb-6">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-white/90 backdrop-blur-sm text-mocha rounded-full">
            {product.roastLevel}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-serif font-bold text-espresso leading-tight group-hover:text-mocha transition-colors">
            {product.name}
          </h3>
          <span className="font-bold text-mocha">£{product.price.toFixed(2)}</span>
        </div>
        
        <div className="pt-2 border-t border-mocha/5 space-y-2">
          <div className="flex justify-between text-[10px] uppercase tracking-widest text-text-secondary">
            <span>Origin</span>
            <span className="text-espresso font-bold">{product.origin}</span>
          </div>
          <div className="flex justify-between text-[10px] uppercase tracking-widest text-text-secondary">
            <span>Notes</span>
            <span className="text-espresso font-bold">{product.flavorNotes.slice(0, 2).join(', ')}</span>
          </div>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); onAddToCart(e); }}
          className="w-full py-3 mt-2 bg-mocha/5 text-mocha rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-mocha hover:text-cream transition-all duration-300"
        >
          Add to Bag
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
