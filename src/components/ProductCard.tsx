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
        className="group cursor-pointer relative flex flex-col h-full"
      >
        <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-[#f4f3ee] flex items-center justify-center transition-colors duration-500 mb-8">
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.div
                key="details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-[#f4f3ee] p-8 flex flex-col justify-center"
              >
                <div className="flex-1 flex flex-col justify-center max-w-[80%] mx-auto w-full">
                  <div className="flex justify-between items-center border-b border-espresso/20 py-4">
                    <span className="text-sm font-bold text-espresso">Coffee.</span>
                    <span className="text-sm text-espresso text-right">{product.name}.</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-espresso/20 py-4">
                    <span className="text-sm font-bold text-espresso">Origin.</span>
                    <span className="text-sm text-espresso text-right">{product.origin}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-espresso/20 py-4">
                    <span className="text-sm font-bold text-espresso">Bag size.</span>
                    <span className="text-sm text-espresso text-right">250g</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.img
                key="image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover mix-blend-multiply p-4"
                referrerPolicy="no-referrer"
              />
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col flex-1 text-center px-4">
          <h3 className="text-xl font-serif font-bold text-espresso tracking-tight mb-4">
            {product.name}.
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
            {product.description}
          </p>
          <p className="text-base font-bold text-espresso mb-6">£{product.price.toFixed(2)}</p>
          
          <div className={`transition-all duration-300 overflow-hidden ${isHovered ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'}`}>
            <button 
              onClick={(e) => { e.stopPropagation(); onAddToCart(e); }}
              className="w-full py-4 bg-espresso text-cream rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-mocha transition-colors"
            >
              Buy Now
            </button>
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
