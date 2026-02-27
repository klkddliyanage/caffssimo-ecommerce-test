import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section className="py-16 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-mocha/10 pb-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-espresso tracking-tight leading-none">
              Community.
            </h2>
            <p className="text-text-secondary text-lg max-w-md">
              Voices from our community of discerning brewers and coffee enthusiasts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gold rounded-full" />
                ))}
              </div>
              <p className="text-espresso text-xl font-serif italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="pt-4 border-t border-mocha/10">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-espresso">{testimonial.name}.</h4>
                <p className="text-[10px] text-text-secondary uppercase tracking-[0.3em]">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
