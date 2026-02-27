import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { View } from '../types';

interface HeroProps {
  onShopNow: () => void;
  atHero?: boolean;
}

export default function Hero({ onShopNow, atHero = true }: HeroProps) {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden -mt-14 md:-mt-16 transition-[padding] duration-300 ${
        atHero ? 'pt-20 md:pt-24' : 'pt-14 md:pt-16'
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.jpeg" 
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-cream/10 to-cream" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center space-y-4 w-full"
        >
          <span className="inline-block text-white/95 font-bold tracking-[0.2em] uppercase text-xs drop-shadow-sm">
            Premium Specialty Coffee
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white tracking-tight leading-[0.85] drop-shadow-md">
            Crafted for <br />
            <span className="text-white/95 italic">Slow Moments.</span>
          </h1>
          <p className="text-white/95 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-serif italic drop-shadow-md text-center">
            "A meticulously curated selection of the world's finest specialty roasts, sourced with integrity and roasted for the discerning palate."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button 
            onClick={onShopNow}
            className="group relative px-10 py-4 bg-mocha text-cream rounded-full font-semibold overflow-hidden shadow-xl shadow-mocha/20 transition-all hover:bg-espresso active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Shop Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-10 py-4 bg-white/95 text-espresso border border-white/40 rounded-full font-semibold hover:bg-white transition-all active:scale-95 shadow-lg backdrop-blur-sm">
            Delivery
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/80">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-black/60 to-transparent" />
      </motion.div>
    </section>
  );
}
