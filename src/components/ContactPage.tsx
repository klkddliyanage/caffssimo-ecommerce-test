import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function ContactPage() {
  return (
    <div className="pt-40 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-espresso tracking-tight leading-none mb-6">
          Contact
        </h1>
        <p className="text-text-secondary text-lg max-w-xl mb-16">
          Get in touch. We’d love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-espresso">
              <Mail className="w-4 h-4" />
              Email
            </div>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-text-secondary hover:text-mocha transition-colors block"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-espresso">
              <Phone className="w-4 h-4" />
              Phone
            </div>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
              className="text-text-secondary hover:text-mocha transition-colors block"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="space-y-2 md:col-span-2">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-espresso">
              <MapPin className="w-4 h-4" />
              Address
            </div>
            <p className="text-text-secondary">
              {CONTACT_INFO.address}
              {CONTACT_INFO.postalCode && `, ${CONTACT_INFO.postalCode}`}
              <br />
              {CONTACT_INFO.city}
            </p>
          </div>
          {CONTACT_INFO.openingHours && (
            <div className="space-y-2 md:col-span-2">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-espresso">
                <Clock className="w-4 h-4" />
                Opening hours
              </div>
              <p className="text-text-secondary">{CONTACT_INFO.openingHours}</p>
            </div>
          )}
          {CONTACT_INFO.social && CONTACT_INFO.social.length > 0 && (
            <div className="space-y-2 md:col-span-2">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-espresso mb-2">
                Follow us
              </div>
              <div className="flex flex-wrap gap-4">
                {CONTACT_INFO.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-mocha transition-colors text-sm"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
