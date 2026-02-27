import { motion } from 'motion/react';

const PAGE_PADDING = 'pt-24 pb-32';
const CONTAINER = 'max-w-7xl mx-auto px-6';
const SECTION_SPACE = 'space-y-24 md:space-y-32';
const LABEL = 'text-[10px] font-bold uppercase tracking-[0.3em] text-espresso/80';
const HEADING = 'text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-espresso tracking-tight leading-tight';
const BODY = 'text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl';

export default function AboutPage() {
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
          <p className={LABEL + ' mb-4'}>About us</p>
          <h1 className={HEADING + ' mb-6'}>
            A brand built on heritage, quality, and the pursuit of the perfect cup.
          </h1>
          <p className={BODY}>
            We are a premium coffee company with a strong franchise presence, committed to delivering an exceptional experience in every location—from our roasting standards to the atmosphere in each café.
          </p>
        </motion.header>

        <div className={SECTION_SPACE}>
          {/* Brand story */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-mocha/10">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
                alt="Coffee roasting and craft"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-6">
              <p className={LABEL}>Our story</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-espresso tracking-tight">
                Where it began
              </h2>
              <p className={BODY}>
                From a single belief—that great coffee should be an everyday luxury—we grew into a brand that stands for consistency, craftsmanship, and a contemporary café culture. Our story is one of passion meeting precision.
              </p>
              <p className={BODY}>
                Every roast is chosen and crafted to meet the highest standards of freshness and flavour, so that whether you visit us at home or in one of our branches, the experience is unmistakably ours.
              </p>
            </div>
          </motion.section>

          {/* Heritage & quality */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="rounded-[32px] border border-mocha/10 bg-white/50 p-8 md:p-12 lg:p-16 soft-shadow"
          >
            <p className={LABEL + ' mb-4'}>Heritage & quality</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-espresso tracking-tight mb-8 max-w-2xl">
              Established identity, unwavering commitment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-mocha mb-3">Premium experience</h3>
                <p className="text-text-secondary leading-relaxed">
                  We create a contemporary café atmosphere where every detail—from the brew to the space—reflects our commitment to excellence.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-mocha mb-3">Freshness & roasting</h3>
                <p className="text-text-secondary leading-relaxed">
                  Our beans are sourced with care and roasted to order where possible, ensuring you always get the peak of flavour and freshness.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-mocha mb-3">Customer-first service</h3>
                <p className="text-text-secondary leading-relaxed">
                  From our baristas to our franchise partners, everyone is aligned around one goal: making every visit memorable and every cup exceptional.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-mocha mb-3">Franchise presence</h3>
                <p className="text-text-secondary leading-relaxed">
                  As a strong franchise brand, we bring the same quality, training, and support to every location so the Caffissimo experience is consistent everywhere.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Closing statement */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-2xl md:text-3xl font-serif font-medium text-espresso leading-relaxed italic">
              “We believe every cup should feel like a moment worth slowing down for.”
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
