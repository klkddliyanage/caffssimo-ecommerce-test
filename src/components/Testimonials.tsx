import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-mocha font-bold tracking-widest uppercase text-xs">Community</span>
          <h2 className="text-4xl font-bold text-espresso tracking-tight">What Our Brewers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl soft-shadow relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-mocha/5" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-espresso font-medium leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-espresso">{testimonial.name}</h4>
                <p className="text-xs text-text-secondary uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
