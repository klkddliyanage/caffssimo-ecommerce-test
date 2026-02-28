import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, BarChart3, Play } from 'lucide-react';

export interface CourseCardProps {
  title: string;
  description: string;
  progress?: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  status?: 'not-started' | 'in-progress' | 'completed';
  to: string;
}

export default function CourseCard({
  title,
  description,
  progress = '0%',
  duration,
  difficulty,
  status = 'not-started',
  to,
}: CourseCardProps) {
  const statusLabel =
    status === 'completed' ? 'Completed' : status === 'in-progress' ? 'In progress' : 'Start';
  const statusClass =
    status === 'completed'
      ? 'bg-sage/20 text-sage'
      : status === 'in-progress'
        ? 'bg-gold/20 text-mocha'
        : 'bg-mocha/10 text-mocha';

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="group rounded-2xl bg-white/80 backdrop-blur-sm border border-mocha/10 p-4 shadow-[0_4px_20px_-2px_rgba(43,30,24,0.06)] hover:shadow-[0_10px_30px_-5px_rgba(43,30,24,0.1)] hover:border-mocha/20 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${statusClass}`}>
          {statusLabel}
        </span>
        <span className="text-xs text-text-secondary flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {duration}
        </span>
        <span className="text-xs text-text-secondary flex items-center gap-1">
          <BarChart3 className="w-3.5 h-3.5" />
          {difficulty}
        </span>
      </div>
      <h3 className="text-lg font-serif font-bold text-espresso tracking-tight mb-1.5">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed grow mb-3">{description}</p>
      {status === 'in-progress' && (
        <div className="w-full h-1.5 bg-mocha/10 rounded-full mb-3 overflow-hidden">
          <div
            className="h-full bg-gold rounded-full transition-all duration-500"
            style={{ width: progress }}
          />
        </div>
      )}
      <Link
        to={to}
        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-mocha text-cream font-semibold text-sm hover:bg-espresso transition-colors duration-200"
      >
        <Play className="w-4 h-4" />
        {status === 'completed' ? 'Review' : status === 'in-progress' ? 'Continue' : 'Start'}
      </Link>
    </motion.article>
  );
}
