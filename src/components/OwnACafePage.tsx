import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface OwnACafePageProps {
  onNavigateToContact?: () => void;
}

const PAGE_PADDING = 'pt-24 pb-32';
const CONTAINER = 'max-w-7xl mx-auto px-6';
const LABEL = 'text-[10px] font-bold uppercase tracking-[0.3em] text-espresso/80';
const HEADING = 'text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-espresso tracking-tight leading-tight';
const BODY = 'text-text-secondary text-lg leading-relaxed';

const BENEFITS = [
  'Proven brand and operating system',
  'Training and ongoing support',
  'Site selection and design guidance',
  'Supply chain and quality standards',
  'Marketing and local store marketing tools',
  'Community of franchise partners',
];

export default function OwnACafePage({ onNavigateToContact }: OwnACafePageProps) {
  return (
    <div className={PAGE_PADDING}>
      <div className={CONTAINER}>
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-20 md:mb-20"
        >
          <p className={LABEL + ' mb-4'}>Franchise opportunity</p>
          <h1 className={HEADING + ' mb-6'}>
            Own a café. Share the passion. Grow with the brand.
          </h1>
          <p className={BODY + ' max-w-2xl'}>
            We are looking for entrepreneurs who share our passion for coffee and community. Join a growing franchise network with a strong identity, dedicated support, and a commitment to excellence in every location.
          </p>
        </motion.header>

        <div className="space-y-24 md:space-y-24">
          {/* Why partner with us */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-mocha/10">
              <img
                src="/caffissimo2.jpeg" 
                alt="Café interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8">
              <p className={LABEL}>Why partner with us</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-espresso tracking-tight">
                Built for success, designed for growth
              </h2>
              <p className={BODY}>
                Our franchise model is built on clarity, support, and a shared commitment to quality. From site selection to day-one opening and beyond, we work alongside you to create a café that reflects the brand and thrives in your market.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {BENEFITS.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 border border-mocha/5 hover:bg-white hover:shadow-lg hover:shadow-mocha/5 transition-all duration-300 group">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-mocha/10 group-hover:bg-espresso flex items-center justify-center transition-colors">
                      <Check className="w-4 h-4 text-mocha group-hover:text-cream transition-colors" />
                    </span>
                    <span className="text-sm font-medium text-text-primary leading-tight pt-1.5">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Available opportunities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="rounded-[32px] border border-mocha/10 bg-white/50 p-8 md:p-12 soft-shadow"
          >
            <p className={LABEL + ' mb-4'}>Opportunities</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-espresso tracking-tight mb-6">
              Available locations & next steps
            </h2>
            <p className={BODY + ' max-w-2xl mb-10'}>
              We are actively expanding into new markets. Whether you have a site in mind or want to explore options in your region, we would like to hear from you. Tell us about your experience and goals, and we will share how the Caffissimo opportunity can work for you.
            </p>
            <div className="flex flex-wrap gap-4">
              {onNavigateToContact ? (
                <button
                  type="button"
                  onClick={onNavigateToContact}
                  className="inline-block px-10 py-4 bg-espresso text-cream rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-mocha transition-all duration-300"
                >
                  Get in touch
                </button>
              ) : (
                <a
                  href="/contact"
                  className="inline-block px-10 py-4 bg-espresso text-cream rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-mocha transition-all duration-300"
                >
                  Get in touch
                </a>
              )}
              <a
                href="mailto:franchise@Caffissimo.com"
                className="inline-block px-10 py-4 border border-espresso text-espresso rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-espresso hover:text-cream transition-all duration-300"
              >
                franchise@Caffissimo.com
              </a>
            </div>
          </motion.section>

          {/* CTA line */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-xl md:text-2xl font-serif text-espresso leading-relaxed">
              If you are motivated by great coffee and building something meaningful in your community, we would love to start a conversation.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
