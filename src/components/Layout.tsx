import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Clock, Menu, X, Facebook, Instagram, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import MobileCallBar from './MobileCallBar';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Tips', path: '/tips' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Clean & Minimal */}
      <div className="hidden md:block bg-buckeye-gray text-white py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-300">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              24/7 Emergency Service
            </span>
            <span className="text-gray-600">•</span>
            <span>Serving Southwest Florida</span>
          </div>
          <a
            href="tel:2394386662"
            className="flex items-center gap-2 bg-buckeye-red hover:bg-red-700 text-white px-3 py-0.5 rounded-full font-bold text-xs transition-colors"
          >
            <Phone className="w-3 h-3" />
            (239) 438-6662
          </a>
        </div>
      </div>

      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          {/* Logo Area - Centered on mobile */}
          <Link to="/" className="flex items-center gap-2 group md:relative absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0">
            <img
              src="/assets/logo-full.png"
              alt="Buckeye Plumbing of SWFL"
              className="h-[60px] md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wide hover:text-buckeye-red transition-colors ${location.pathname === link.path ? 'text-buckeye-red' : 'text-gray-800'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-buckeye-red text-white px-6 py-2.5 rounded-full font-bold uppercase text-sm hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
            >
              Schedule Service
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-800 hover:text-buckeye-red transition-colors z-50 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-white overflow-y-auto"
          >
            <div className="flex flex-col min-h-screen pt-6 pb-10 px-6">
              {/* Logo - Centered at Top */}
              <div className="flex justify-center mb-8">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <img
                    src="/assets/logo-full.png"
                    alt="Buckeye Plumbing of SWFL"
                    className="h-16 w-auto object-contain"
                  />
                </Link>
              </div>

              <div className="flex flex-col space-y-2 mb-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-3xl font-display font-bold uppercase tracking-wide py-4 border-b border-gray-100 ${location.pathname === link.path ? 'text-buckeye-red' : 'text-gray-900'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-4 relative">
                {/* Mascot Decoration */}
                <img
                  src="/assets/mascot-waving.png"
                  alt="Friendly Plumber Waving"
                  className="absolute -top-24 right-0 w-32 h-auto object-contain pointer-events-none z-0 opacity-20"
                />
                <a href="tel:2394386662" className="flex items-center justify-center gap-3 bg-gray-100 text-gray-900 py-5 rounded-2xl font-bold text-xl active:scale-95 transition-transform z-10">
                  <Phone className="w-6 h-6 text-buckeye-red" /> Call (239) 438-6662
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 bg-buckeye-red text-white py-5 rounded-2xl font-bold text-xl shadow-lg shadow-red-200 active:scale-95 transition-transform"
                >
                  <Calendar className="w-6 h-6" /> Schedule Service
                </Link>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm font-bold text-gray-900 mb-1">24/7 Emergency Service</p>
                <p className="text-xs text-gray-500 mb-3">Licensed & Insured #CFC1429403</p>
                <p className="text-[10px] text-gray-400 border-t border-gray-100 pt-3">
                  Buckeye Plumbing of SW Florida, Inc. is not associated with Buckeye Plumbing Inc.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-24 md:pb-8 border-t-4 border-buckeye-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img
                src="/assets/logo-full.png"
                alt="Buckeye Plumbing of SWFL"
                className="h-16 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-white/70 text-base italic font-medium mb-2">
              "Forget the rest, we are the best."
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              SW Florida's most reliable plumbing service with 25 years of experience. Licensed, insured, and dedicated to 100% customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/buckeyeplumbingfl/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-buckeye-red transition-colors group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="https://www.instagram.com/plumbingbuckeye/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-buckeye-red transition-colors group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-buckeye-red">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Tips', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-buckeye-red rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-buckeye-red">Our Services</h3>
            <ul className="space-y-3">
              {['Leak Detection', 'Water Heaters', 'Drain Cleaning', 'Repiping', 'Commercial Plumbing'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-buckeye-red rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-buckeye-red">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-buckeye-red shrink-0 mt-0.5" />
                <span>Naples, Fort Myers, Cape Coral, Bonita Springs, Marco Island, Lehigh Acres & More</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-buckeye-red shrink-0" />
                <a href="tel:2394386662" className="hover:text-white transition-colors">(239) 438-6662</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5 text-buckeye-red shrink-0" />
                <span>Open 24/7, Always Ready</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Buckeye Plumbing of SW Florida, Inc. All rights reserved.</p>
          <p>License #CFC1429403</p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-800">
          <p className="text-center text-[11px] md:text-xs text-gray-500">
            Buckeye Plumbing of SW Florida, Inc. is not associated with Buckeye Plumbing Inc.
          </p>
          <p className="text-center text-[10px] md:text-xs text-gray-600 mt-3">
            Design by{' '}
            <a
              href="https://www.innovat3solutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-buckeye-red hover:text-white transition-colors font-medium"
            >
              INNOVAT3 Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
