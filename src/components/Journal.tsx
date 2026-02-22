import React from 'react';
import { motion } from 'motion/react';

const ARTICLES = [
  {
    category: 'Spotlight.',
    title: 'Introducing: matcha.',
    excerpt: 'Three drinks. Two matchas. No shortcuts. Every ingredient we serve is carefully chosen...',
    image: 'https://images.unsplash.com/photo-1582722872445-44c56bb62741?auto=format&fit=crop&q=80&w=600'
  },
  {
    category: 'Origin.',
    title: 'Colombia: Huila.',
    excerpt: 'Think of spectacular coffee, and Colombia is the origin that comes to mind...',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600'
  }
];

export default function Journal() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-mocha/10 pb-12">
        <div className="space-y-4">
          <h2 className="text-6xl md:text-8xl font-serif font-bold text-espresso tracking-tight leading-none">
            The journal.
          </h2>
          <p className="text-text-secondary text-lg max-w-md">
            Stories from the field, brewing guides, and deep dives into the world of specialty coffee.
          </p>
        </div>
        <button className="px-8 py-3 border border-espresso text-espresso rounded-full text-xs font-bold uppercase tracking-widest hover:bg-espresso hover:text-cream transition-all duration-300">
          Explore Journal
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Main Featured Article */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8 group cursor-pointer"
        >
          <div className="relative aspect-[16/10] rounded-[48px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1200" 
              alt="Featured article"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cream/70 mb-4 block">Spotlight.</span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-cream leading-tight">
                Caffasimo x <br /> NOMAD.
              </h3>
            </div>
          </div>
          <div className="space-y-4 max-w-xl">
            <p className="text-text-secondary leading-relaxed">
              A Barcelona guest. A London roast. For this year's London Coffee Festival, we've partnered with NOMAD Coffee on a one-off collaboration that explores the boundaries of fermentation.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-espresso border-b border-espresso pb-1 hover:text-mocha hover:border-mocha transition-colors">
              Read More
            </button>
          </div>
        </motion.div>

        {/* Side Articles */}
        <div className="lg:col-span-5 space-y-16">
          {ARTICLES.map((article, index) => (
            <motion.div 
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 group cursor-pointer"
            >
              <div className="space-y-4 order-2 sm:order-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-mocha">{article.category}</span>
                <h4 className="text-2xl font-serif font-bold text-espresso group-hover:text-mocha transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-espresso/40 group-hover:text-espresso transition-colors">
                  Read More
                </button>
              </div>
              <div className="aspect-square rounded-[32px] overflow-hidden order-1 sm:order-2">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
