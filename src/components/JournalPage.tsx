import React from 'react';
import { motion } from 'motion/react';
import Journal from './Journal';

export default function JournalPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-24"
    >
      <Journal />
    </motion.div>
  );
}
