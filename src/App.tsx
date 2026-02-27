/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import RoastLevels from './components/RoastLevels';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ShopPage from './components/ShopPage';
import ProductPage from './components/ProductPage';
import CartDrawer from './components/CartDrawer';
import AIRoastFinder from './components/AIRoastFinder';
import VisitUs from './components/VisitUs';
import Journal from './components/Journal';
import BrandPhilosophy from './components/BrandPhilosophy';
import BranchesPage from './components/BranchesPage';
import AboutPage from './components/AboutPage';
import MenusPage from './components/MenusPage';
import OwnACafePage from './components/OwnACafePage';
import EmploymentPage from './components/EmploymentPage';
import ContactPage from './components/ContactPage';
import { View, Product, CartItem } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const addToCart = (product: Product, quantity: number = 1, grind: string = 'Whole Bean') => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.grindType === grind);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.grindType === grind)
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity, grindType: grind }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-0"
          >
            <Hero onShopNow={() => setCurrentView('shop')} />
            <Features />
            <AIRoastFinder onSelectProduct={handleProductClick} />
            <BestSellers 
              onProductClick={handleProductClick}
              onAddToCart={(p) => addToCart(p)}
            />
            <VisitUs />
            <BrandPhilosophy />
            <Journal />
            <RoastLevels onExplore={() => setCurrentView('shop')} />
            <Testimonials />
          </motion.div>
        );
      case 'shop':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ShopPage 
              selectedBranchId={selectedBranchId}
              onProductClick={handleProductClick}
              onAddToCart={(p) => addToCart(p)}
            />
          </motion.div>
        );
      case 'product':
        return selectedProduct ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
          >
            <ProductPage 
              product={selectedProduct}
              onBack={() => setCurrentView('shop')}
              onAddToCart={(p, q, g) => addToCart(p, q, g)}
            />
          </motion.div>
        ) : null;
      case 'branches':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <BranchesPage />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <AboutPage />
          </motion.div>
        );
      case 'menus':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <MenusPage />
          </motion.div>
        );
      case 'ownACafe':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <OwnACafePage onNavigateToContact={() => setCurrentView('contact')} />
          </motion.div>
        );
      case 'employment':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <EmploymentPage />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ContactPage />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentView={currentView}
        onViewChange={setCurrentView}
        onCartOpen={() => setIsCartOpen(true)}
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        selectedBranchId={selectedBranchId}
        onSelectBranch={setSelectedBranchId}
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemove={removeFromCart}
        onCheckout={() => {
          alert('Checkout functionality would go here!');
          setIsCartOpen(false);
        }}
      />
    </div>
  );
}
