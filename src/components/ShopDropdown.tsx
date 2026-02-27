import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { View } from '../types';
import { DOORDASH_URL, UBER_EATS_URL } from '../constants';

interface ShopDropdownProps {
  currentView: View;
  onViewChange: (view: View) => void;
  /** Optional class for the trigger to match navbar item style */
  className?: string;
  /** When true, use white text (e.g. over hero) */
  light?: boolean;
}

export default function ShopDropdown({ currentView, onViewChange, className = '', light = false }: ShopDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isShopActive = currentView === 'shop';

  const triggerClass = light
    ? `nav-item flex items-center gap-1 py-1.5 pr-0.5 transition-all duration-200 text-white/95 hover:text-white ${isShopActive ? 'font-bold' : ''}`
    : `nav-item flex items-center gap-1 py-1.5 pr-0.5 transition-colors duration-200 ${className} ${isShopActive ? 'nav-item-active' : 'nav-item-default'}`;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={triggerClass}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>Shop</span>
        <ChevronDown
          className={`w-3 h-3 opacity-70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-full left-0 mt-1.5 min-w-[160px] py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-mocha/[0.08] shadow-lg shadow-mocha/5 z-50"
            role="menu"
          >
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              onViewChange('shop');
              setIsOpen(false);
            }}
            className="dropdown-item w-full text-left px-3.5 py-2 text-[11px] font-medium tracking-[0.06em] text-text-primary hover:bg-mocha/5 transition-colors duration-150 first:rounded-t-md"
          >
            Shop
          </button>
          <a
            href={DOORDASH_URL}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setIsOpen(false)}
            className="dropdown-item block px-3.5 py-2 text-[11px] font-medium tracking-[0.06em] text-text-primary hover:bg-mocha/5 transition-colors duration-150"
          >
            DoorDash
          </a>
          <a
            href={UBER_EATS_URL}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setIsOpen(false)}
            className="dropdown-item block px-3.5 py-2 text-[11px] font-medium tracking-[0.06em] text-text-primary hover:bg-mocha/5 transition-colors duration-150 last:rounded-b-md"
          >
            Uber Eats
          </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
