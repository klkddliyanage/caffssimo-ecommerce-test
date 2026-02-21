import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 space-y-10">
            <h3 className="text-4xl font-serif font-bold tracking-tight">Caffasimo.</h3>
            <p className="text-cream/60 text-lg leading-relaxed max-w-sm">
              Crafting premium specialty coffee experiences through ethical sourcing and meticulous roasting. A slow take on instant gratification.
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <button key={i} className="text-cream/40 hover:text-cream transition-colors">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cream/40">Shop.</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['All Coffee', 'Roast Levels', 'Equipment', 'Subscriptions'].map((item) => (
                <li key={item} className="hover:text-beige transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cream/40">Company.</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Our Story', 'Wholesale', 'Sustainability', 'Contact'].map((item) => (
                <li key={item} className="hover:text-beige transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cream/40">Newsletter.</h4>
            <p className="text-cream/60 text-sm">Join our community for brewing tips and exclusive offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-transparent border-b border-cream/20 py-4 text-sm focus:outline-none focus:border-cream transition-colors placeholder:text-cream/20"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-cream hover:text-beige transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/20">© 2026 Caffasimo Coffee Roasters.</p>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-cream/20">
            <span className="hover:text-cream cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-cream cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-cream cursor-pointer transition-colors">Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
