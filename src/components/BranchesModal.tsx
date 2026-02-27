import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { BRANCHES, type Branch } from '../constants';

interface BranchesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBranch?: (branchId: string) => void;
  selectedBranchId?: string | null;
}

function groupBranchesByCity(branches: Branch[]): Record<string, Branch[]> {
  const groups: Record<string, Branch[]> = {};
  for (const b of branches) {
    const key = b.city;
    if (!groups[key]) groups[key] = [];
    groups[key].push(b);
  }
  return groups;
}

export default function BranchesModal({
  isOpen,
  onClose,
  onSelectBranch,
  selectedBranchId,
}: BranchesModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const byCity = groupBranchesByCity(BRANCHES);
  const columns = Object.entries(byCity);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso/40 backdrop-blur-sm z-50"
            aria-hidden="true"
          />
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            aria-modal="true"
            aria-labelledby="branch-modal-title"
            role="dialog"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[85vh] flex flex-col bg-white rounded-2xl soft-shadow border border-mocha/10 pointer-events-auto overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-mocha/10 shrink-0">
                <h2
                  id="branch-modal-title"
                  className="text-lg font-sans font-bold text-espresso tracking-tight"
                >
                  Select your branch
                </h2>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-full text-text-secondary hover:text-mocha hover:bg-mocha/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mocha/30"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {columns.map(([city, branchList]) => (
                    <div key={city}>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-espresso/80 mb-3">
                        {city}
                      </p>
                      <ul className="space-y-1">
                        {branchList.map((branch) => (
                          <li key={branch.id}>
                            <button
                              type="button"
                              onClick={() => {
                                onSelectBranch?.(branch.id);
                                onClose();
                              }}
                              className={`w-full text-left text-sm font-medium transition-colors py-1.5 px-0 rounded hover:text-mocha ${
                                selectedBranchId === branch.id
                                  ? 'text-mocha'
                                  : 'text-text-primary'
                              }`}
                            >
                              {branch.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
