import { motion } from 'motion/react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  onCartOpen: () => void;
  cartCount: number;
}

export default function Navbar({ currentView, onViewChange, onCartOpen, cartCount }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3 soft-shadow">
        <div className="flex items-center gap-12">
          <button 
            onClick={() => onViewChange('home')}
            className="text-2xl font-serif font-bold text-espresso tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-espresso rounded-full flex items-center justify-center text-cream text-sm font-sans">C</div>
            Caffasimo.
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {['Shop', 'Roasts', 'Journal', 'Visit'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'Shop') onViewChange('shop');
                  if (item === 'Journal' || item === 'Visit') onViewChange('home'); // Scroll to sections would be better but home is fine for now
                }}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-mocha ${
                  (item === 'Shop' && currentView === 'shop') ? 'text-mocha' : 'text-text-secondary'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-text-secondary hover:text-mocha transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-text-secondary hover:text-mocha transition-colors hidden sm:block">
            <User className="w-5 h-5" />
          </button>
          <button 
            onClick={onCartOpen}
            className="relative p-2 text-text-secondary hover:text-mocha transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 w-4 h-4 bg-mocha text-cream text-[10px] flex items-center justify-center rounded-full font-bold"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
          <button className="md:hidden p-2 text-text-secondary hover:text-mocha transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
