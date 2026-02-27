import { motion } from 'motion/react';
import { Coffee, ShieldCheck, Truck, Leaf } from 'lucide-react';

const FEATURES = [
  {
    icon: Coffee,
    title: 'Freshly Roasted',
    description: 'We roast in small batches daily to ensure you receive the freshest beans possible.'
  },
  {
    icon: Leaf,
    title: 'Ethically Sourced',
    description: 'Direct trade relationships that ensure farmers are paid fairly and sustainably.'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Roasted today, shipped tomorrow. Freshness delivered straight to your door.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description: 'Not satisfied with your brew? We will make it right, no questions asked.'
  }
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 rounded-[24px] bg-mocha/5 flex items-center justify-center text-mocha mb-8 transition-transform duration-500 hover:scale-110 hover:rotate-3">
                <feature.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-espresso leading-tight">
                  {feature.title}.
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
