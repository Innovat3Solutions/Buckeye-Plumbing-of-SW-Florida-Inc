import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Clock, Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      {/* Top Bar - Hidden on mobile when scrolled to save space, or keep it small */}
      <div className="hidden md:block bg-buckeye-gray text-white py-2 px-4 text-sm font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-buckeye-red" /> 24/7 Emergency Service</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-buckeye-red" /> Serving SW Florida</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:2394386662" className="flex items-center gap-2 hover:text-buckeye-red transition-colors">
              <Phone className="w-4 h-4" /> (239) 438-6662
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/assets/logo-full.png" 
              alt="Buckeye Plumbing of SWFL" 
              className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
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
            className="md:hidden p-2 text-gray-800 hover:text-buckeye-red transition-colors z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
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
            <div className="flex flex-col min-h-screen pt-24 pb-10 px-6">
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
                <p className="text-xs text-gray-500">Licensed & Insured #CFC1429403</p>
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
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-buckeye-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img 
                src="/assets/logo-full.png" 
                alt="Buckeye Plumbing of SWFL" 
                className="h-16 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              SW Florida’s most reliable & friendly plumbing service. Family-owned, licensed, and dedicated to excellence since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-buckeye-red transition-colors group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-buckeye-red transition-colors group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-buckeye-red transition-colors group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-buckeye-red">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Contact', 'Privacy Policy'].map((item) => (
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
                <span>Serving Naples, Estero, Bonita Springs, Marco Island & Surrounding Areas</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-buckeye-red shrink-0" />
                <a href="tel:2394386662" className="hover:text-white transition-colors">(239) 438-6662</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5 text-buckeye-red shrink-0" />
                <span>Open 24/7 - Always Ready</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Buckeye Plumbing of SW Florida, Inc. All rights reserved.</p>
          <p>License #CFC1429403</p>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow pt-24 md:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
}
