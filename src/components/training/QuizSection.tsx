import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, Award } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: { value: string; label: string; correct: boolean }[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'A customer says their drink is too cold. What should you do first?',
    options: [
      { value: 'a', label: 'Offer to remake it with warmer milk', correct: true },
      { value: 'b', label: 'Tell them it was made to standard', correct: false },
      { value: 'c', label: 'Add hot water to the cup', correct: false },
      { value: 'd', label: 'Refuse to change it', correct: false },
    ],
  },
  {
    id: 'q2',
    question: 'When should you wash your hands during a shift?',
    options: [
      { value: 'a', label: 'Only at the start of the shift', correct: false },
      { value: 'b', label: 'After handling money, before handling food', correct: true },
      { value: 'c', label: 'Only when they look dirty', correct: false },
      { value: 'd', label: 'Once per hour', correct: false },
    ],
  },
  {
    id: 'q3',
    question: 'What is the correct order for building a latte?',
    options: [
      { value: 'a', label: 'Milk, then espresso, then foam', correct: false },
      { value: 'b', label: 'Espresso, then steamed milk, then foam', correct: true },
      { value: 'c', label: 'Foam, milk, espresso', correct: false },
      { value: 'd', label: 'Espresso and milk at the same time', correct: false },
    ],
  },
  {
    id: 'q4',
    question: 'During closing, which task is essential before leaving?',
    options: [
      { value: 'a', label: 'Turn off all lights only', correct: false },
      { value: 'b', label: 'Clean equipment, restock, secure cash, set alarm', correct: true },
      { value: 'c', label: 'Lock the door only', correct: false },
      { value: 'd', label: 'Leave cleaning for the opener', correct: false },
    ],
  },
  {
    id: 'q5',
    question: 'A delivery order is missing an item. What should you do?',
    options: [
      { value: 'a', label: 'Ignore it; the customer can contact the app', correct: false },
      { value: 'b', label: 'Note it, inform the manager, and follow store policy for refund/replacement', correct: true },
      { value: 'c', label: 'Give the driver cash to give the customer', correct: false },
      { value: 'd', label: 'Cancel the entire order', correct: false },
    ],
  },
];

export default function QuizSection() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleSelect = (questionId: string, value: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowScore(true);
  };

  const correctCount = QUIZ_QUESTIONS.filter(
    (q) => q.options.find((o) => o.value === answers[q.id])?.correct
  ).length;
  const total = QUIZ_QUESTIONS.length;
  const scorePercent = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  const getOptionState = (q: QuizQuestion, value: string) => {
    if (!submitted) return null;
    const option = q.options.find((o) => o.value === value)!;
    const selected = answers[q.id] === value;
    if (option.correct) return 'correct';
    if (selected && !option.correct) return 'incorrect';
    return null;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-white/80 backdrop-blur-sm border border-mocha/10 p-6 md:p-8 shadow-[0_4px_20px_-2px_rgba(43,30,24,0.06)]"
    >
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-espresso tracking-tight mb-2">
        Knowledge check
      </h2>
      <p className="text-text-secondary mb-8">
        Test what you’ve learned with this short quiz. Submit to see your score.
      </p>

      <div className="space-y-8">
        {QUIZ_QUESTIONS.map((q) => (
          <div key={q.id} className="space-y-3">
            <h3 className="font-semibold text-espresso">{q.question}</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {q.options.map((opt) => {
                const state = getOptionState(q, opt.value);
                const isSelected = answers[q.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect(q.id, opt.value)}
                    disabled={submitted}
                    className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
                      state === 'correct'
                        ? 'border-sage bg-sage/10 text-espresso'
                        : state === 'incorrect'
                          ? 'border-red-300 bg-red-50 text-espresso'
                          : isSelected
                            ? 'border-mocha bg-mocha/10 text-espresso'
                            : 'border-mocha/15 bg-white/50 text-espresso hover:border-mocha/30 hover:bg-mocha/5'
                    } ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <span className="font-medium">{opt.label}</span>
                    {state === 'correct' && <CheckCircle className="w-5 h-5 text-sage shrink-0" />}
                    {state === 'incorrect' && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitted || Object.keys(answers).length < total}
          className="px-6 py-3 rounded-xl bg-mocha text-cream font-semibold hover:bg-espresso disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Submit quiz
        </button>
        {submitted && (
          <span className="text-sm text-text-secondary">
            You can review your answers above. Scroll down to see your score.
          </span>
        )}
      </div>

      <AnimatePresence>
        {showScore && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-10 p-6 rounded-2xl bg-linear-to-br from-mocha/10 to-gold/10 border border-mocha/15 flex flex-col sm:flex-row items-center gap-6"
          >
            <span className="shrink-0 w-14 h-14 rounded-full bg-gold/20 text-mocha flex items-center justify-center">
              <Award className="w-8 h-8" />
            </span>
            <div>
              <h3 className="text-xl font-serif font-bold text-espresso">
                Score: {correctCount} / {total} ({scorePercent}%)
              </h3>
              <p className="text-text-secondary mt-1">
                {scorePercent >= 80
                  ? 'Great job! You’re ready to put this into practice.'
                  : scorePercent >= 60
                    ? 'Good effort. Review the materials and try again when you’re ready.'
                    : 'Review the training materials and try the quiz again.'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
