import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tighter">Caffasimo</h3>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              Crafting premium specialty coffee experiences through ethical sourcing and meticulous roasting.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:bg-cream hover:text-espresso transition-all">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs">Shop</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              {['All Coffee', 'Roast Levels', 'Equipment', 'Subscriptions'].map((item) => (
                <li key={item} className="hover:text-cream transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              {['Our Story', 'Wholesale', 'Sustainability', 'Contact'].map((item) => (
                <li key={item} className="hover:text-cream transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-cream/60 text-sm">Join our community for brewing tips and exclusive offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full bg-cream/5 border border-cream/10 rounded-xl py-4 px-6 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-gold text-espresso rounded-lg flex items-center justify-center hover:bg-cream transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-cream/40">© 2026 Caffasimo Coffee Roasters. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-cream/40">
            <span className="hover:text-cream cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-cream cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-cream cursor-pointer transition-colors">Shipping Info</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
