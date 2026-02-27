import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { BRANCHES, type Branch } from '../constants';
import BranchMap from './BranchMap';

const BRANCH_IMAGES = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1497933322477-911f93bb7867?auto=format&fit=crop&q=80&w=800',
];

function BranchCard({ branch, index }: { branch: Branch; index: number }) {
  const bgImage = BRANCH_IMAGES[index % BRANCH_IMAGES.length];
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="relative flex flex-col p-8 md:p-12 rounded-[32px] overflow-hidden group hover:shadow-2xl hover:shadow-espresso/20 transition-all duration-500 min-h-[480px]"
    >
      {/* Background Image & Overlay */}
      <img
        src={bgImage}
        alt="Branch interior"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2c221b] via-[#2c221b]/80 to-[#2c221b]/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2c221b]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Top bar */}
        <div className="flex justify-between items-start">
          {/* <div className="w-14 h-14 rounded-full border border-cream/30 flex items-center justify-center bg-black/10 backdrop-blur-md">
            <MapPin className="w-6 h-6 text-cream" />
          </div> */}
          <div className="px-5 py-2 rounded-full border border-cream/30 bg-black/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-cream">
            {branch.city}
          </div>
        </div>

        {/* Text Area */}
        <div className="mt-12 text-cream">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-cream tracking-tight mb-4">
            {branch.name}
          </h3>
          <div className="space-y-1 text-sm text-cream/80 max-w-[90%]">
            <p>{branch.address}</p>
            {branch.phone && (
              <p>
                <a href={`tel:${branch.phone.replace(/\D/g, '')}`} className="hover:text-cream transition-colors">
                  {branch.phone}
                </a>
              </p>
            )}
            <div className="mt-4 pt-4 flex justify-between items-end gap-2 text-cream/80">
              <div className="space-y-1">
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/50">
                  Opening Hours
                 </p>
                 <p>{branch.openingHours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom map link */}
        {branch.mapUrl && (
          <div className="mt-8">
            <a
              href={branch.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-cream hover:text-white transition-colors"
            >
              VIEW ON MAP <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function BranchesPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Modern map: contained, rounded, light tiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="h-[320px] sm:h-[360px] md:h-[400px]"
        >
          <BranchMap branches={BRANCHES} className="h-full w-full" />
        </motion.div>

        {/* Branch cards: 3 per row on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pt-16 md:pt-24">
          {BRANCHES.map((branch, index) => (
            <BranchCard key={branch.id} branch={branch} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
