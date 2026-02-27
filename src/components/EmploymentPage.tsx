import { motion } from 'motion/react';
import { Upload, Send } from 'lucide-react';

const PAGE_PADDING = 'pt-24 pb-32';
const CONTAINER = 'max-w-7xl mx-auto px-6';
const LABEL = 'text-[10px] font-bold uppercase tracking-[0.3em] text-espresso/80';
const HEADING = 'text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-espresso tracking-tight leading-tight';
const BODY = 'text-text-secondary text-lg leading-relaxed';

const INPUT_STYLE =
  'w-full px-4 py-3 rounded-xl border border-mocha/10 bg-white/50 text-espresso placeholder:text-text-secondary/60 focus:outline-none focus:border-mocha transition-colors';

export default function EmploymentPage() {
  return (
    <div className={PAGE_PADDING}>
      <div className={CONTAINER}>
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-20 md:mb-28"
        >
          <p className={LABEL + ' mb-4'}>Employment</p>
          <h1 className={HEADING + ' mb-6'}>
            Join our team
          </h1>
          <p className={BODY + ' max-w-2xl'}>
            We are always looking for motivated individuals who care about coffee, community, and craft. If you want to be part of a team that takes quality and service seriously, we would love to hear from you.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Intro / culture */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className={LABEL}>Why work with us</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-espresso tracking-tight">
              A place where passion meets purpose
            </h2>
            <p className={BODY}>
              Our team culture is built on respect, consistency, and a shared commitment to the customer experience. We invest in training and development so that every team member can grow with the brand.
            </p>
            <p className={BODY}>
              Whether you are behind the bar, on the floor, or in the roastery, you are part of a premium coffee brand that values quality and people.
            </p>
          </motion.section>

          {/* Application form */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-[32px] border border-mocha/10 bg-white/50 p-8 md:p-10 soft-shadow">
              <p className={LABEL + ' mb-2'}>Apply</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-espresso tracking-tight mb-8">
                Applicant information
              </h2>
              <form
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-xs font-bold uppercase tracking-[0.15em] text-espresso/80 mb-2">
                      First name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      placeholder="First name"
                      className={INPUT_STYLE}
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-xs font-bold uppercase tracking-[0.15em] text-espresso/80 mb-2">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      placeholder="Last name"
                      className={INPUT_STYLE}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-[0.15em] text-espresso/80 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className={INPUT_STYLE}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-[0.15em] text-espresso/80 mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={INPUT_STYLE}
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-xs font-bold uppercase tracking-[0.15em] text-espresso/80 mb-2">
                    Position or area of interest
                  </label>
                  <input
                    id="position"
                    type="text"
                    placeholder="e.g. Barista, Shift lead"
                    className={INPUT_STYLE}
                  />
                </div>
                <div>
                  <label htmlFor="branch" className="block text-xs font-bold uppercase tracking-[0.15em] text-espresso/80 mb-2">
                    Preferred branch (optional)
                  </label>
                  <input
                    id="branch"
                    type="text"
                    placeholder="Branch name or city"
                    className={INPUT_STYLE}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.15em] text-espresso/80 mb-2">
                    Resume / CV
                  </label>
                  <div className="border-2 border-dashed border-mocha/20 rounded-xl p-8 text-center hover:border-mocha/40 transition-colors">
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="cursor-pointer flex flex-col items-center gap-2 text-text-secondary"
                    >
                      <Upload className="w-8 h-8 text-mocha/60" />
                      <span className="text-sm font-medium">Click to upload or drag and drop</span>
                      <span className="text-xs">PDF or DOC up to 10MB</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-[0.15em] text-espresso/80 mb-2">
                    Cover message (optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us a bit about yourself and why you would like to join the team."
                    className={INPUT_STYLE + ' resize-none'}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-espresso text-cream rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-mocha transition-all duration-300"
                >
                  Submit application
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="mt-6 text-sm text-text-secondary/80">
                We review all applications and will be in touch if there is a match. For general enquiries, visit our Contact page.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
