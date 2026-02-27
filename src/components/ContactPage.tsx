import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-32 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="border-b border-mocha/10 pb-12 mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-espresso/80 mb-4">Get in touch</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-espresso tracking-tight leading-none mb-6">
            Contact us.
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            Have a question, feedback, or just want to say hello? We’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl">
          {/* Contact Form Details */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-espresso tracking-tight">
              Send a message
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-espresso/80">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-transparent border-b border-mocha/20 py-3 text-sm focus:outline-none focus:border-espresso transition-colors placeholder:text-text-secondary/40 text-espresso"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-espresso/80">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-transparent border-b border-mocha/20 py-3 text-sm focus:outline-none focus:border-espresso transition-colors placeholder:text-text-secondary/40 text-espresso"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-[0.2em] text-espresso/80">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full bg-transparent border-b border-mocha/20 py-3 text-sm focus:outline-none focus:border-espresso transition-colors placeholder:text-text-secondary/40 text-espresso"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-espresso/80">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-mocha/20 py-3 text-sm focus:outline-none focus:border-espresso transition-colors placeholder:text-text-secondary/40 text-espresso resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button 
                type="submit"
                className="mt-4 px-10 py-4 bg-espresso text-cream rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-mocha hover:shadow-xl hover:shadow-mocha/10 transition-all duration-300 w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
            <motion.div whileHover={{ y: -4 }} className="p-8 rounded-[32px] bg-white/50 border border-mocha/10 hover:bg-white hover:shadow-xl hover:shadow-mocha/5 transition-all duration-300 group flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-mocha/10 group-hover:bg-espresso flex items-center justify-center transition-colors mb-12">
                <Mail className="w-5 h-5 text-espresso group-hover:text-cream transition-colors" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-espresso/80 mb-2">Email</div>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-serif font-bold text-espresso hover:text-mocha transition-colors block">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="p-8 rounded-[32px] bg-white/50 border border-mocha/10 hover:bg-white hover:shadow-xl hover:shadow-mocha/5 transition-all duration-300 group flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-mocha/10 group-hover:bg-espresso flex items-center justify-center transition-colors mb-12">
                <Phone className="w-5 h-5 text-espresso group-hover:text-cream transition-colors" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-espresso/80 mb-2">Phone</div>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="text-xl font-serif font-bold text-espresso hover:text-mocha transition-colors block">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="p-8 rounded-[32px] bg-white/50 border border-mocha/10 hover:bg-white hover:shadow-xl hover:shadow-mocha/5 transition-all duration-300 group flex flex-col justify-between sm:col-span-2 relative overflow-hidden">
              {CONTACT_INFO.openingHours && (
                <div className="absolute top-8 right-8 text-right hidden sm:block">
                  <div className="flex items-center gap-2 justify-end text-[10px] font-bold uppercase tracking-[0.3em] text-espresso/80 mb-2">
                    <Clock className="w-3.5 h-3.5 text-mocha" />
                    Hours
                  </div>
                  <p className="text-sm font-medium text-text-secondary">{CONTACT_INFO.openingHours}</p>
                </div>
              )}
              <div className="w-12 h-12 rounded-full bg-mocha/10 group-hover:bg-espresso flex items-center justify-center transition-colors mb-12">
                <MapPin className="w-5 h-5 text-espresso group-hover:text-cream transition-colors" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-espresso/80 mb-2">Visit Us</div>
                <p className="text-2xl font-serif font-bold text-espresso">
                  {CONTACT_INFO.address}{CONTACT_INFO.postalCode && `, ${CONTACT_INFO.postalCode}`}
                  <br />
                  {CONTACT_INFO.city}
                </p>
                {CONTACT_INFO.openingHours && (
                  <div className="mt-8 pt-6 border-t border-mocha/10 sm:hidden block">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-espresso/80 mb-2">
                      <Clock className="w-3.5 h-3.5 text-mocha" />
                      Hours
                    </div>
                    <p className="text-sm font-medium text-text-secondary">{CONTACT_INFO.openingHours}</p>
                  </div>
                )}
              </div>
            </motion.div>

            {CONTACT_INFO.social && CONTACT_INFO.social.length > 0 && (
              <div className="sm:col-span-2 flex flex-wrap gap-4 pt-4">
                {CONTACT_INFO.social.map((s) => (
                  <motion.a
                    key={s.label}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] text-center px-8 py-4 rounded-full border border-mocha/10 bg-white/50 text-[11px] font-bold uppercase tracking-[0.2em] text-espresso hover:bg-espresso hover:text-cream hover:border-espresso hover:shadow-lg transition-all duration-300"
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
