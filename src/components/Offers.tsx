import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Tag, Gift, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const OFFERS = [
  {
    icon: Tag,
    title: '10% Off Single-Origin',
    description: 'Experience the unique flavors of our latest Ethiopian Yirgacheffe harvest.',
    code: 'SINGLE10',
    bgColor: 'bg-[#E8DCCB]', // beige
    textColor: 'text-[#4A3428]', // mocha
    iconBg: 'bg-white/40',
    // Realistic coffee imagery for the background
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800',
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).getTime() // 2 days from now
  },
  {
    icon: Gift,
    title: 'Buy One Get One',
    description: 'Purchase any 1kg bag of our Signature House Blend and get a 250g bag free.',
    code: 'BOGOHOUSE',
    bgColor: 'bg-[#2B1E18]', // espresso
    textColor: 'text-[#F5EFE6]', // cream
    iconBg: 'bg-white/10',
    // Espresso shot/beans background
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 12).getTime() // 12 hours from now
  },
  {
    icon: Tag,
    title: 'Free Shipping',
    description: 'Enjoy free shipping on all orders over $50. No code required at checkout.',
    code: 'FREESHIP50',
    bgColor: 'bg-[#8E9C8C]', // sage
    textColor: 'text-[#F5EFE6]', // cream
    iconBg: 'bg-black/10',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800',
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).getTime() // 5 days from now
  }
];

function CountdownTimer({ endTime }: { endTime: number }) {
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, endTime - Date.now()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(Math.max(0, endTime - Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex items-center gap-1.5 sm:gap-2 scale-90 sm:scale-100 origin-right">
      <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-12 h-12 sm:w-14 sm:h-14 shadow-sm">
        <span className="text-lg sm:text-xl font-bold leading-none">{days.toString().padStart(2, '0')}</span>
        <span className="text-[8px] sm:text-[9px] uppercase tracking-wider opacity-80 mt-1 font-semibold">Days</span>
      </div>
      <span className="text-current/60 font-bold mb-3">:</span>
      <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-12 h-12 sm:w-14 sm:h-14 shadow-sm">
        <span className="text-lg sm:text-xl font-bold leading-none">{hours.toString().padStart(2, '0')}</span>
        <span className="text-[8px] sm:text-[9px] uppercase tracking-wider opacity-80 mt-1 font-semibold">Hrs</span>
      </div>
      <span className="text-current/60 font-bold mb-3">:</span>
      <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-12 h-12 sm:w-14 sm:h-14 shadow-sm">
        <span className="text-lg sm:text-xl font-bold leading-none">{minutes.toString().padStart(2, '0')}</span>
        <span className="text-[8px] sm:text-[9px] uppercase tracking-wider opacity-80 mt-1 font-semibold">Min</span>
      </div>
      <span className="text-current/60 font-bold mb-3">:</span>
      <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-12 h-12 sm:w-14 sm:h-14 shadow-sm">
        <span className="text-lg sm:text-xl font-bold leading-none">{seconds.toString().padStart(2, '0')}</span>
        <span className="text-[8px] sm:text-[9px] uppercase tracking-wider opacity-80 mt-1 font-semibold">Sec</span>
      </div>
    </div>
  );
}

export default function Offers() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-cream/50 relative overflow-hidden">
      {/* Decorative background element */ }
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-mocha/5 blur-3xl" />
      {/* <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-espresso/5 blur-3xl" /> */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <span className="inline-block text-mocha font-bold tracking-[0.2em] uppercase text-xs mb-2">
              Limited Time
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-espresso">
              Special Offers
            </h2>
          </motion.div>

          <div className="flex items-center gap-3">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-mocha/20 flex items-center justify-center text-mocha hover:bg-mocha hover:text-cream transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-mocha/20 flex items-center justify-center text-mocha hover:bg-mocha hover:text-cream transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-6 px-6">
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {OFFERS.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                // Using w-[calc(50%-12px)] so exactly two fit (accounting for the 24px gap between them)
                className={`relative flex-none w-[90vw] md:w-[calc(50%-12px)] snap-center overflow-hidden rounded-[24px] ${offer.bgColor} ${offer.textColor} soft-shadow-hover transition-all duration-300 hover:-translate-y-2 group h-[420px] flex flex-col`}
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 ${
                    offer.bgColor === 'bg-[#2B1E18]' 
                      ? 'bg-gradient-to-t from-espresso via-espresso/90 to-espresso/30' 
                      : offer.bgColor === 'bg-[#E8DCCB]'
                        ? 'bg-gradient-to-t from-beige via-beige/95 to-beige/50'
                        : 'bg-gradient-to-t from-sage/90 via-sage/80 to-sage/40' // Sage gradient
                  }`} />
                </div>

                {/* Content Container */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`p-4 rounded-full ${offer.iconBg} backdrop-blur-md border border-white/20 shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                      <offer.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider border border-current opacity-90 backdrop-blur-sm bg-white/5`}>
                      USE CODE: {offer.code}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-tight drop-shadow-sm">
                      {offer.title}
                    </h3>
                    <p className="opacity-95 leading-relaxed text-sm md:text-base max-w-md drop-shadow-sm font-medium">
                      {offer.description}
                    </p>
                    
                    <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <button className={`inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all duration-300`}>
                        Shop Offer <ArrowRight className="w-4 h-4" />
                      </button>
                      <CountdownTimer endTime={offer.endTime} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
