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
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-mocha font-bold tracking-widest uppercase text-xs">The Spectrum</span>
          <h2 className="text-4xl font-bold text-espresso tracking-tight">Shop by Roast Level</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROASTS.map((roast, index) => (
            <motion.div
              key={roast.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => onExplore(roast.level)}
              className="group cursor-pointer relative aspect-[3/4] rounded-3xl overflow-hidden soft-shadow"
            >
              <img 
                src={roast.image} 
                alt={roast.level}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end space-y-4">
                <span className={`w-fit px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${roast.accent}`}>
                  {roast.level}
                </span>
                <h3 className="text-3xl font-bold text-cream tracking-tight">{roast.level} Roast</h3>
                <p className="text-cream/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {roast.description}
                </p>
                <button className="text-cream font-bold text-sm flex items-center gap-2 mt-2">
                  Explore {roast.level} <ArrowRight className="w-4 h-4" />
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
