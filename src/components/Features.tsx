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
    <section className="py-24 bg-beige/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4 text-center md:text-left"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center soft-shadow mx-auto md:mx-0">
                <feature.icon className="w-6 h-6 text-mocha" />
              </div>
              <h3 className="text-xl font-bold text-espresso">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
