import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ChevronDown } from 'lucide-react';
import CourseCard from './training/CourseCard';
import { TRAINING_COURSES } from '../data/trainingCourses';

const CONTAINER = 'max-w-5xl mx-auto px-4 sm:px-6';
const SECTION_PADDING = 'py-6 md:py-8';
const SECTION_HEADING = 'text-2xl md:text-3xl font-serif font-bold text-espresso tracking-tight mb-2';
const SECTION_SUB = 'text-text-secondary mb-8';

const FAQ_ITEMS = [
  {
    q: 'How do I start my first shift?',
    a: 'Check in with your manager 10 minutes early. They’ll assign you a role and walk you through the opening checklist. Wear your uniform and closed-toe shoes.',
  },
  {
    q: 'Where do I check training videos?',
    a: 'Open any course from the list above. Each course has its own videos, quiz, and resources. Bookmark this page or ask your manager for the link.',
  },
  {
    q: 'Who do I contact if equipment is not working?',
    a: 'Report broken or faulty equipment to your shift supervisor or manager immediately. Do not attempt repairs yourself. Contact details are in the employee handbook.',
  },
  {
    q: 'What should I do if a customer complaint happens?',
    a: 'Stay calm and listen. Apologize for the experience and offer a remake or replacement when appropriate. Escalate to the manager if the customer requests it or the situation escalates.',
  },
  {
    q: 'How do I handle delivery orders?',
    a: 'Follow the “Handling Uber Eats / DoorDash Orders” course on this page. Confirm the order on the tablet, prepare it to standard, and hand off to the driver with the correct bag and items.',
  },
];

export default function TrainingPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-cream text-text-primary">
      {/* Back to Home - sticky top */}
      <div className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-mocha/10">
        <div className={CONTAINER}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 py-4 text-sm font-semibold text-mocha hover:text-espresso transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className={`${CONTAINER} ${SECTION_PADDING} pt-4 md:pt-6`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-mocha/70 mb-3">
            Internal use only
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-espresso tracking-tight leading-tight mb-4">
            Employee Training Program
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-2">
            Learning materials for staff: operations, service standards, coffee knowledge, and onboarding.
          </p>
          <p className="text-sm text-mocha/80 italic">For staff training only.</p>
        </motion.div>
      </section>

      {/* Courses */}
      <section className={`${CONTAINER} ${SECTION_PADDING}`}>
        <h2 className={SECTION_HEADING}>Courses</h2>
        <p className="text-text-secondary mb-4">
          Click a course to open it. Each course has videos, a quiz, and resources. Start or continue below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {TRAINING_COURSES.map((c) => (
            <CourseCard
              key={c.id}
              title={c.title}
              description={c.description}
              duration={c.duration}
              difficulty={c.difficulty}
              progress={c.progress ?? '0%'}
              status={c.status ?? 'not-started'}
              to={`/training/course/${c.slug}`}
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${CONTAINER} ${SECTION_PADDING}`}>
        <h2 className={SECTION_HEADING}>Frequently asked questions</h2>
        <p className={SECTION_SUB}>Quick answers for new and current staff.</p>
        <div className="space-y-2">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaq === faq.q;
            return (
              <motion.div
                key={faq.q}
                initial={false}
                className="rounded-xl border border-mocha/10 bg-white/70 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : faq.q)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-espresso hover:bg-mocha/5 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 pt-0 text-text-secondary text-sm leading-relaxed border-t border-mocha/10">
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Completion / encouragement */}
      <section className={`${CONTAINER} ${SECTION_PADDING} pb-12`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-linear-to-br from-mocha/15 via-gold/10 to-sage/10 border border-mocha/15 p-8 md:p-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-espresso tracking-tight mb-3">
            Keep learning and growing with the team
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-6">
            Complete courses at your own pace and revisit this page whenever you need a refresher. You’re an important part of our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-mocha text-cream font-semibold hover:bg-espresso transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Floating Back to Home - visible on scroll */}
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
