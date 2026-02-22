import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove,
  onCheckout
}: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-mocha/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-mocha" />
                <h2 className="text-xl font-semibold text-espresso tracking-tight">Your Cart</h2>
                <span className="bg-mocha text-cream text-xs px-2 py-0.5 rounded-full">
                  {items.reduce((sum, i) => sum + i.quantity, 0)}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-mocha/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-mocha" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-mocha/5 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-mocha/30" />
                  </div>
                  <div>
                    <p className="text-espresso font-medium">Your cart is empty</p>
                    <p className="text-text-secondary text-sm">Looks like you haven't added any coffee yet.</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="text-mocha font-semibold text-sm hover:underline"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    key={`${item.id}-${item.grindType}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-6"
                  >
                    <div className="w-24 h-24 rounded-[20px] overflow-hidden bg-[#f4f3ee] flex-shrink-0 flex items-center justify-center">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-contain p-2 mix-blend-multiply"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif font-bold text-espresso leading-tight text-lg">{item.name}.</h3>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-mocha/40 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mt-2">{item.grindType} • {item.roastLevel} Roast</p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-mocha/10 rounded-full overflow-hidden bg-white/50 h-8">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="px-3 hover:text-mocha transition-colors h-full flex items-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-espresso min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="px-3 hover:text-mocha transition-colors h-full flex items-center"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-bold text-espresso">£{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 bg-white border-t border-mocha/10 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Subtotal</span>
                  <span className="text-2xl font-serif font-bold text-espresso">£{subtotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-text-secondary text-center">Shipping and taxes calculated at checkout.</p>
                <button 
                  onClick={onCheckout}
                  className="w-full py-4 bg-espresso text-cream rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-mocha transition-colors shadow-2xl shadow-espresso/20 active:scale-[0.98]"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
