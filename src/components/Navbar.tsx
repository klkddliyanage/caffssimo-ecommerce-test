import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, User, Menu, ChevronDown, X } from 'lucide-react';
import { View } from '../types';
import ShopDropdown from './ShopDropdown';
import BranchesModal from './BranchesModal';
import { BRANCHES } from '../constants';

interface NavbarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  onCartOpen: () => void;
  cartCount: number;
  selectedBranchId?: string | null;
  onSelectBranch?: (branchId: string) => void;
  atHero?: boolean;
}

type NavItem =
  | { id: string; label: string; view: View }
  | { id: 'shop'; label: string; dropdown: true };

const NAV_ITEMS: NavItem[] = [
  { id: 'shop', label: 'Shop', dropdown: true },
  { id: 'menus', label: 'Menus', view: 'menus' },
  { id: 'about', label: 'About', view: 'about' },
  { id: 'branches', label: 'Branches', view: 'branches' },
  { id: 'ownACafe', label: 'Own a Cafe', view: 'ownACafe' },
  { id: 'employment', label: 'Employment', view: 'employment' },
  { id: 'contact', label: 'Contact', view: 'contact' },
];

const BRANCH_LABEL_MAX = 14;

function getBranchLabel(id: string | null): string {
  if (!id) return 'Branch';
  const name = BRANCHES.find((b) => b.id === id)?.name.replace(/^Caffissimo\s+/, '');
  if (!name) return 'Branch';
  return name.length > BRANCH_LABEL_MAX ? name.slice(0, BRANCH_LABEL_MAX) + '…' : name;
}

export default function Navbar({
  currentView,
  onViewChange,
  onCartOpen,
  cartCount,
  selectedBranchId = null,
  onSelectBranch,
  atHero = true,
}: NavbarProps) {
  const [isBranchesOpen, setIsBranchesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isLight = atHero;
  const isExpanded = atHero;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        isLight
          ? 'bg-transparent border-b border-transparent'
          : 'bg-white/70 backdrop-blur-xl border-b border-mocha/[0.08] shadow-[0_1px_3px_rgba(43,30,24,0.06)]'
      }`}
    >
      <header
        className={`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 transition-all duration-300 ${
          isExpanded ? 'h-16 md:h-20 py-2' : 'h-12 md:h-14'
        }`}
      >
        {/* Left: logo + nav */}
        <div className="flex items-center gap-4 md:gap-5 min-w-0">
          <button
            type="button"
            onClick={() => onViewChange('home')}
            className="flex items-center shrink-0 hover:opacity-90 transition-opacity duration-200"
            aria-label="Home"
          >
            <img
              src="/logo.png"
              alt="Caffissimo"
              className={`w-auto object-contain transition-all duration-300 ${
                isExpanded ? 'h-14 md:h-20' : 'h-12 md:h-14'
              } ${isLight ? 'brightness-0 invert' : ''}`}
            />
          </button>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {NAV_ITEMS.map((item) => {
              if (item.id === 'shop' && 'dropdown' in item) {
                return (
                  <ShopDropdown
                    key={item.id}
                    currentView={currentView}
                    onViewChange={onViewChange}
                    light={isLight}
                  />
                );
              }
              if ('view' in item) {
                const isActive = currentView === item.view;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onViewChange(item.view)}
                    className={`nav-item py-1.5 px-1 transition-all duration-200 ${
                      isLight
                        ? `text-white/95 hover:text-white ${isActive ? 'font-bold' : ''}`
                        : isActive
                          ? 'nav-item-active'
                          : 'nav-item-default'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Right: branch selector + divider + icons */}
        <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsBranchesOpen(true)}
            className={`hidden sm:flex items-center gap-1.5 h-9 pl-3.5 pr-2.5 rounded-full border transition-all duration-200 text-[11px] font-semibold tracking-[0.1em] uppercase ${
              isLight
                ? 'border-white/40 text-white/95 hover:border-white/60 hover:text-white hover:bg-white/10'
                : 'border-mocha/10 bg-mocha/[0.03] text-text-secondary hover:border-mocha/20 hover:bg-mocha/5 hover:text-mocha'
            }`}
            aria-expanded={isBranchesOpen}
            aria-haspopup="dialog"
          >
            <span className="max-w-[72px] truncate">{getBranchLabel(selectedBranchId)}</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-70 shrink-0" />
          </button>

          <div
            className={`hidden sm:block w-px h-5 mx-0.5 transition-colors duration-300 ${
              isLight ? 'bg-white/40' : 'bg-mocha/10'
            }`}
            aria-hidden
          />

          <div className="flex items-center gap-0.5">
            <button
              type="button"
              className={`p-2.5 rounded-lg transition-all duration-200 hidden sm:flex ${
                isLight
                  ? 'text-white/95 hover:text-white hover:bg-white/10'
                  : 'nav-icon text-text-secondary hover:text-mocha hover:bg-mocha/5'
              }`}
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={onCartOpen}
              className={`relative p-2.5 rounded-lg transition-all duration-200 ${
                isLight
                  ? 'text-white/95 hover:text-white hover:bg-white/10'
                  : 'nav-icon text-text-secondary hover:text-mocha hover:bg-mocha/5'
              }`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`absolute top-0.5 right-0.5 w-4 h-4 text-[10px] flex items-center justify-center rounded-full font-semibold ${
                    isLight ? 'bg-white text-mocha' : 'bg-mocha text-cream'
                  }`}
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className={`p-2.5 rounded-lg transition-all duration-200 md:hidden ${
                isLight
                  ? 'text-white/95 hover:text-white hover:bg-white/10'
                  : 'nav-icon text-text-secondary hover:text-mocha hover:bg-mocha/5'
              }`}
              aria-label="Menu"
              aria-expanded={isMobileOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-espresso/30 backdrop-blur-sm z-40 md:hidden"
              aria-hidden
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-cream border-l border-mocha/10 shadow-xl z-50 md:hidden flex flex-col"
              aria-modal
              aria-label="Navigation menu"
            >
              <div className="flex items-center justify-between p-4 border-b border-mocha/10">
                <span className="text-sm font-semibold uppercase tracking-widest text-espresso/70">Menu</span>
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg text-text-secondary hover:text-mocha hover:bg-mocha/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-6 space-y-1">
                <button
                  onClick={() => { onViewChange('shop'); setIsMobileOpen(false); }}
                  className={`nav-item w-full text-left py-3 px-1 block border-b border-mocha/5 ${
                    currentView === 'shop' ? 'nav-item-active' : 'nav-item-default'
                  }`}
                >
                  Shop
                </button>
                {NAV_ITEMS.map((item) => {
                  if (item.id === 'shop') return null;
                  if ('view' in item) {
                    return (
                      <button
                        key={item.id}
                        onClick={() => { onViewChange(item.view); setIsMobileOpen(false); }}
                        className={`nav-item w-full text-left py-3 px-1 block border-b border-mocha/5 ${
                          currentView === item.view ? 'nav-item-active' : 'nav-item-default'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  }
                  return null;
                })}
              </nav>
              <div className="p-4 border-t border-mocha/10">
                <button
                  type="button"
                  onClick={() => { setIsMobileOpen(false); setIsBranchesOpen(true); }}
                  className="w-full flex items-center justify-center gap-2 h-10 rounded-full border border-mocha/10 bg-mocha/[0.03] text-[10px] font-semibold tracking-[0.1em] uppercase text-text-secondary hover:bg-mocha/5 hover:text-mocha transition-colors"
                >
                  {getBranchLabel(selectedBranchId)}
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <BranchesModal
        isOpen={isBranchesOpen}
        onClose={() => setIsBranchesOpen(false)}
        onSelectBranch={onSelectBranch}
        selectedBranchId={selectedBranchId}
      />
    </nav>
  );
}
