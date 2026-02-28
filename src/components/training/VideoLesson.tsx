import { motion } from 'motion/react';

export interface VideoLessonProps {
  title: string;
  description: string;
  videoUrl?: string;
  embedId?: string;
}

export default function VideoLesson({ title, description, videoUrl, embedId }: VideoLessonProps) {
  const embedSrc =
    embedId != null
      ? `https://www.youtube.com/embed/${embedId}?rel=0`
      : videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // placeholder

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl bg-white/80 backdrop-blur-sm border border-mocha/10 overflow-hidden shadow-[0_4px_20px_-2px_rgba(43,30,24,0.06)] hover:shadow-[0_10px_30px_-5px_rgba(43,30,24,0.08)] transition-shadow duration-300"
    >
      <div className="aspect-video w-full bg-mocha/10">
        <iframe
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-serif font-bold text-espresso tracking-tight mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </motion.section>
  );
}
