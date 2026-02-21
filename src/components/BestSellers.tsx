import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface BestSellersProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function BestSellers({ onProductClick, onAddToCart }: BestSellersProps) {
  const bestSellers = PRODUCTS.slice(0, 3);

  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-mocha/10 pb-8 gap-8">
        <div className="space-y-4">
          <h2 className="text-6xl md:text-8xl font-serif font-bold text-espresso tracking-tight leading-none">
            House favourites.
          </h2>
          <p className="text-text-secondary text-lg max-w-md">
            Our most beloved roasts, chosen by our community for their exceptional character and consistency.
          </p>
        </div>
        <button 
          onClick={() => onProductClick(PRODUCTS[0])}
          className="px-8 py-3 border border-espresso text-espresso rounded-full text-xs font-bold uppercase tracking-widest hover:bg-espresso hover:text-cream transition-all duration-300"
        >
          Shop Now
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
        {bestSellers.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="editorial"
            onClick={() => onProductClick(product)}
            onAddToCart={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
          />
        ))}
      </div>
    </section>
  );
}
