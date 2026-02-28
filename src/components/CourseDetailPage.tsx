import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import { getCourseBySlug } from '../data/trainingCourses';
import VideoLesson from './training/VideoLesson';
import ResourceCard from './training/ResourceCard';
import QuizSection from './training/QuizSection';

const CONTAINER = 'max-w-5xl mx-auto px-4 sm:px-6';
const SECTION_PADDING = 'py-6 md:py-8';
const SECTION_HEADING = 'text-2xl md:text-3xl font-serif font-bold text-espresso tracking-tight mb-2';
const SECTION_SUB = 'text-text-secondary mb-4';

export default function CourseDetailPage() {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const course = courseSlug ? getCourseBySlug(courseSlug) : undefined;

  if (!course) {
    return <Navigate to="/training" replace />;
  }

  return (
    <div className="min-h-screen bg-cream text-text-primary">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-mocha/10">
        <div className={CONTAINER}>
          <div className="flex items-center gap-4 py-4">
            <Link
              to="/training"
              className="inline-flex items-center gap-2 text-sm font-semibold text-mocha hover:text-espresso transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All courses
            </Link>
            <span className="text-mocha/40">|</span>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-mocha hover:text-espresso transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Course hero */}
      <section className={`${CONTAINER} ${SECTION_PADDING} pt-4 md:pt-6`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-mocha/70 mb-2">
            Course
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-espresso tracking-tight leading-tight mb-3">
            {course.title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {course.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-4 text-sm text-text-secondary">
            <span>{course.duration}</span>
            <span>·</span>
            <span>{course.difficulty}</span>
          </div>
        </motion.div>
      </section>

      {/* Videos */}
      <section className={`${CONTAINER} ${SECTION_PADDING}`}>
        <h2 className={SECTION_HEADING}>Videos</h2>
        <p className={SECTION_SUB}>
          Watch these lessons for this course. Replace placeholder video IDs with your real training videos.
        </p>
        {course.videos.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {course.videos.map((v) => (
              <VideoLesson
                key={v.title}
                title={v.title}
                description={v.description}
                embedId={v.embedId}
              />
            ))}
          </div>
        ) : (
          <p className="text-text-secondary">No videos for this course yet.</p>
        )}
      </section>

      {/* Quiz */}
      <section className={`${CONTAINER} ${SECTION_PADDING}`}>
        <QuizSection
          questions={course.quizQuestions}
          title="Course quiz"
          description="Test what you’ve learned from this course. Submit to see your score."
        />
      </section>

      {/* Resources */}
      <section className={`${CONTAINER} ${SECTION_PADDING}`}>
        <h2 className={SECTION_HEADING}>Resources</h2>
        <p className={SECTION_SUB}>
          Download or view materials for this course.
        </p>
        {course.resources.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.resources.map((r) => (
              <ResourceCard
                key={r.title}
                title={r.title}
                description={r.description}
                href={r.href ?? '#'}
              />
            ))}
          </div>
        ) : (
          <p className="text-text-secondary">No resources for this course yet.</p>
        )}
      </section>

      {/* Back to training */}
      <section className={`${CONTAINER} ${SECTION_PADDING} pb-12`}>
        <Link
          to="/training"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-mocha text-cream font-semibold hover:bg-espresso transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all courses
        </Link>
      </section>

      {/* Floating Back to Home */}
      <Link
        to="/"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-mocha text-cream shadow-lg hover:bg-espresso transition-colors md:bottom-8 md:right-8"
        aria-label="Back to Home"
      >
        <Home className="w-5 h-5" />
      </Link>
    </div>
  );
}
