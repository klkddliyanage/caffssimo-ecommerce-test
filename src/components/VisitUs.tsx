import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function VisitUs() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] rounded-[48px] overflow-hidden group"
        >
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" 
            alt="Our flagship location"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-espresso tracking-tight leading-none">
              Visit us.
            </h2>
            <p className="text-text-secondary text-xl leading-relaxed max-w-md">
              Experience the art of the pour in our flagship sanctuary. A space designed for slow moments and exceptional coffee.
            </p>
          </div>
          
          <div className="relative">
            <button className="px-10 py-4 border border-espresso text-espresso rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-espresso hover:text-cream transition-all duration-300">
              Our Locations
            </button>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:block absolute -bottom-32 -right-16 w-64 aspect-square rounded-[32px] overflow-hidden border-8 border-cream soft-shadow"
            >
              <img 
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600" 
                alt="Interior detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="pt-12 grid grid-cols-2 gap-12 border-t border-mocha/10">
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-espresso">Bermondsey St.</h4>
              <p className="text-sm text-text-secondary">London, SE1 3TQ</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-espresso">Opening Hours.</h4>
              <p className="text-sm text-text-secondary">Mon - Sun: 08:00 - 18:00</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
