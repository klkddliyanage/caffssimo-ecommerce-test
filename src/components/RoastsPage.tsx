import React from 'react';
import { motion } from 'motion/react';
import RoastLevels from './RoastLevels';

export default function RoastsPage({ onExplore }: { onExplore: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-24"
    >
      <RoastLevels onExplore={onExplore} />
    </motion.div>
  );
}
