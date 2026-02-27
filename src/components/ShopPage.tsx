import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { Product, RoastLevel } from '../types';
import ProductCard from './ProductCard';
import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface ShopPageProps {
  selectedBranchId?: string | null;
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ShopPage({ selectedBranchId, onProductClick, onAddToCart }: ShopPageProps) {
  const [selectedRoast, setSelectedRoast] = useState<RoastLevel | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesRoast = selectedRoast === 'All' || p.roastLevel === selectedRoast;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.origin.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRoast && matchesSearch;
    });
  }, [selectedRoast, searchQuery]);

  return (
    <div className="pt-24 pb-32 max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 space-y-12"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-mocha/10 pb-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-espresso tracking-tight leading-none">
              The Collection.
            </h1>
            <p className="text-text-secondary text-lg max-w-md">
              A meticulously curated selection of the world's finest specialty roasts, sourced with integrity.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input 
                type="text" 
                placeholder="Search roasts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-6 py-4 bg-white/50 border border-mocha/10 rounded-full text-sm focus:outline-none focus:border-mocha transition-colors"
              />
            </div>
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-mocha hover:text-espresso transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-8">
          {['All', 'Light', 'Medium', 'Dark'].map((level) => (
            <button
              key={level}
              onClick={() => setSelectedRoast(level as any)}
              className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-all relative pb-2 ${
                selectedRoast === level 
                  ? 'text-espresso' 
                  : 'text-text-secondary/40 hover:text-mocha'
              }`}
            >
              {level}
              {selectedRoast === level && (
                <motion.div 
                  layoutId="activeRoast"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-espresso"
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ProductCard
              product={product}
              variant="editorial"
              onClick={() => onProductClick(product)}
              onAddToCart={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
            />
          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-32 text-center space-y-6">
          <p className="text-3xl font-serif font-bold text-espresso">No roasts found.</p>
          <p className="text-text-secondary">Try adjusting your filters or search query.</p>
          <button 
            onClick={() => { setSelectedRoast('All'); setSearchQuery(''); }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-mocha underline underline-offset-8"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
