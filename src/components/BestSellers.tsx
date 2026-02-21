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
      <div className="flex items-center justify-between mb-20 border-b border-mocha/10 pb-8">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-espresso tracking-tight">
          House favourites.
        </h2>
        <button 
          onClick={() => onProductClick(PRODUCTS[0])} // Just a placeholder for "Shop All"
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
