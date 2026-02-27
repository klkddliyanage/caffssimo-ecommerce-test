import { motion } from 'motion/react';
import { BRANCHES, type Branch } from '../constants';
import BranchMap from './BranchMap';

function BranchCard({ branch, index }: { branch: Branch; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="p-6 rounded-2xl border border-mocha/10 flex flex-col"
    >
      <h3 className="text-xl font-serif font-bold text-espresso tracking-tight mb-4">
        {branch.name}
      </h3>
      <div className="space-y-3 text-sm text-text-secondary flex-grow">
        <p>{branch.address}</p>
        <p>{branch.city}</p>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-espresso/80 mt-2">
          Opening
        </p>
        <p className="text-text-secondary">{branch.openingHours}</p>
        {branch.phone && (
          <p>
            <a
              href={`tel:${branch.phone.replace(/\D/g, '')}`}
              className="hover:text-mocha transition-colors"
            >
              {branch.phone}
            </a>
          </p>
        )}
      </div>
      {branch.mapUrl && (
        <a
          href={branch.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-mocha hover:text-espresso transition-colors"
        >
          View on map
        </a>
      )}
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

        {/* Branch cards: 4 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-16 md:pt-24">
          {BRANCHES.map((branch, index) => (
            <BranchCard key={branch.id} branch={branch} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
