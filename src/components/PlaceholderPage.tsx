import { motion } from 'motion/react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="pt-40 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-espresso tracking-tight leading-none mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-text-secondary text-lg max-w-md mx-auto">{description}</p>
        )}
        <p className="mt-8 text-text-secondary/80 text-sm">
          Content for this page can be added here.
        </p>
      </motion.div>
    </div>
  );
}
