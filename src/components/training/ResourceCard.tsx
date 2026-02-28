import { motion } from 'motion/react';
import { FileText, ExternalLink } from 'lucide-react';

export interface ResourceCardProps {
  title: string;
  description?: string;
  href?: string;
  type?: 'pdf' | 'doc' | 'link';
}

export default function ResourceCard({
  title,
  description,
  href = '#',
  type = 'link',
}: ResourceCardProps) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35 }}
      className="group flex items-start gap-4 p-4 rounded-xl bg-white/70 border border-mocha/10 hover:border-mocha/20 hover:bg-white/90 hover:shadow-[0_8px_24px_-6px_rgba(43,30,24,0.08)] transition-all duration-200"
    >
      <span className="shrink-0 w-10 h-10 rounded-lg bg-mocha/10 text-mocha flex items-center justify-center group-hover:bg-gold/20 group-hover:text-mocha transition-colors">
        <FileText className="w-5 h-5" />
      </span>
      <div className="min-w-0 flex-1">
        <h4 className="font-semibold text-espresso group-hover:text-mocha transition-colors">
          {title}
        </h4>
        {description && (
          <p className="text-sm text-text-secondary mt-0.5">{description}</p>
        )}
      </div>
      <ExternalLink className="w-4 h-4 text-text-secondary shrink-0 mt-1 group-hover:text-mocha transition-colors" />
    </motion.a>
  );
}
