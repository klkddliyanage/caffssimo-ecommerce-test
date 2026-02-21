import { motion } from 'motion/react';
import { View } from '../types';

interface RoastLevelsProps {
  onExplore: (roast: string) => void;
}

const ROASTS = [
  {
    level: 'Light',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
    description: 'Bright, acidic, and complex with floral and fruity notes.',
    accent: 'bg-sage/20 text-sage'
  },
  {
    level: 'Medium',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800',
    description: 'Balanced body and acidity with sweet, nutty undertones.',
    accent: 'bg-gold/20 text-gold'
  },
  {
    level: 'Dark',
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=800',
    description: 'Bold, smoky, and heavy-bodied with rich chocolate notes.',
    accent: 'bg-espresso/20 text-espresso'
  }
];

export default function RoastLevels({ onExplore }: RoastLevelsProps) {
  return (
    <section className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-mocha/10 pb-12">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-espresso tracking-tight leading-none">
              The spectrum.
            </h2>
            <p className="text-text-secondary text-lg max-w-md">
              From bright and floral to bold and smoky. Discover the perfect roast for your palate.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ROASTS.map((roast, index) => (
            <motion.div
              key={roast.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onExplore(roast.level)}
              className="group cursor-pointer space-y-8"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden">
                <img 
                  src={roast.image} 
                  alt={roast.level}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="space-y-4 text-center">
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif font-bold text-espresso tracking-tight group-hover:text-mocha transition-colors">
                    {roast.level} Roast.
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-[240px] mx-auto">
                    {roast.description}
                  </p>
                </div>
                <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-espresso border-b border-espresso pb-1 hover:text-mocha hover:border-mocha transition-colors">
                  Explore {roast.level}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
