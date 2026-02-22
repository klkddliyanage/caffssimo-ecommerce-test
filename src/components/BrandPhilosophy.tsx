import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function BrandPhilosophy() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[100vh] overflow-hidden flex items-center justify-center bg-espresso">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1920" 
          alt="Coffee shop atmosphere"
          className="w-full h-full object-cover brightness-[0.6]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content Overlay */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-12"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream tracking-tight leading-[1.1]">
          Caffasimo is a slow take on <br />
          <span className="italic text-beige">instant gratification.</span>
        </h2>
        <p className="text-cream/80 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
          Thoughtful pours, rare flavor profiles and paraphernalia for your daily cup. We believe every bean tells a story worth listening to.
        </p>
        <div className="pt-8">
          <button className="px-12 py-5 bg-cream text-espresso rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-beige transition-all duration-300 shadow-2xl shadow-black/20">
            Our Story
          </button>
        </div>
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-espresso/40 via-transparent to-espresso/40" />
    </section>
  );
}
