import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Home, Building2, AlertCircle, ChevronRight } from 'lucide-react';

type Category = 'residential' | 'commercial' | 'emergency';

interface Service {
  title: string;
  description: string;
  image: string;
  category: Category;
}

const categories = [
  { id: 'residential' as Category, label: 'Residential', shortLabel: 'Home', icon: Home },
  { id: 'commercial' as Category, label: 'Commercial', shortLabel: 'Business', icon: Building2 },
  { id: 'emergency' as Category, label: 'Emergency 24/7', shortLabel: '24/7', icon: AlertCircle },
];

const services: Service[] = [
  // Residential
  {
    title: 'Leak & Pipe Repair',
    description: 'Fast leak detection, repair or replacement with minimal disruption to your home.',
    image: '/assets/service-images/service-leak-repair.png',
    category: 'residential',
  },
  {
    title: 'Water Heater Services',
    description: 'Repair or replace any size water heater. Gas, electric, or tankless upgrades available.',
    image: '/assets/service-images/service-water-heater.png',
    category: 'residential',
  },
  {
    title: 'Drain Cleaning',
    description: 'Clear clogged drains fast with professional hydro jetting and camera inspection.',
    image: '/assets/service-images/service-drain-cleaning.png',
    category: 'residential',
  },
  {
    title: 'Kitchen & Bath',
    description: 'Faucet, sink, toilet, and shower installation and repair for your home.',
    image: '/assets/service-images/service-leak-repair-2.jpg',
    category: 'residential',
  },
  {
    title: 'Repiping Services',
    description: 'Replace old, corroded pipes with modern PEX or copper materials.',
    image: '/assets/service-images/service-repiping.png',
    category: 'residential',
  },
  // Commercial
  {
    title: 'Commercial Plumbing',
    description: 'Reliable plumbing solutions for businesses, HOAs, restaurants, and office buildings.',
    image: '/assets/service-images/service-commercial.png',
    category: 'commercial',
  },
  {
    title: 'New Construction',
    description: 'Complete plumbing systems for new commercial builds. We work with contractors.',
    image: '/assets/service-images/service-new-construction.png',
    category: 'commercial',
  },
  {
    title: 'Backflow Prevention',
    description: 'Certified backflow testing and installation to protect your water supply.',
    image: '/assets/service-images/service-commercial-2.jpg',
    category: 'commercial',
  },
  // Emergency
  {
    title: 'Burst Pipe Response',
    description: 'Immediate 24/7 response to burst pipes. We minimize water damage fast.',
    image: '/assets/service-images/service-repiping.png',
    category: 'emergency',
  },
  {
    title: 'Emergency Leak Repair',
    description: 'Major leaks can\'t wait. Our emergency team responds day or night.',
    image: '/assets/service-images/service-leak-repair.png',
    category: 'emergency',
  },
  {
    title: 'Sewer Line Emergency',
    description: 'Sewage backup or main line blockage? We restore flow immediately.',
    image: '/assets/service-images/service-drain-jetting.png',
    category: 'emergency',
  },
];

export default function ServicesPreview() {
  const [activeCategory, setActiveCategory] = useState<Category>('residential');
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const filteredServices = services.filter((s) => s.category === activeCategory);
  const activeService = filteredServices[activeServiceIndex] || filteredServices[0];

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setActiveServiceIndex(0);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-buckeye-red to-buckeye-red-light">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From simple leaks to full system installations, we do it all with professionalism and a smile.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8 md:mb-10 -mx-4 px-4 overflow-x-auto scrollbar-hide">
          <div className="inline-flex bg-white rounded-full p-1 md:p-1.5 shadow-lg border border-gray-100">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`
                    flex items-center gap-1.5 md:gap-2 px-4 md:px-5 py-2.5 md:py-2.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-wide transition-all duration-300 whitespace-nowrap
                    ${isActive
                      ? 'bg-buckeye-red text-white shadow-md'
                      : 'text-gray-500 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="sm:hidden">{cat.shortLabel}</span>
                  <span className="hidden sm:inline">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content: Left Menu + Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Side: Service List - Order 2 on mobile, 1 on desktop */}
          <div className="relative order-2 lg:order-1">
            {/* Service List */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {filteredServices.map((service, index) => {
                  const isSelected = index === activeServiceIndex;
                  return (
                    <button
                      key={service.title}
                      onClick={() => setActiveServiceIndex(index)}
                      className={`
                        w-full text-left p-4 md:p-4 rounded-xl transition-all duration-300 group active:scale-[0.98]
                        ${isSelected
                          ? 'bg-buckeye-red text-white shadow-lg shadow-buckeye-red/20'
                          : 'bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <div className="min-w-0 flex-1">
                          <h4 className={`font-bold font-display text-base md:text-lg ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                            {service.title}
                          </h4>
                          <p className={`text-sm mt-1 line-clamp-2 ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                            {service.description}
                          </p>
                        </div>
                        <ChevronRight className={`w-5 h-5 flex-shrink-0 ml-3 transition-transform ${isSelected ? 'text-white rotate-0' : 'text-gray-400 group-hover:translate-x-1'}`} />
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* View All Services Link with Mascot */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <img
                src="/assets/mascot-pointing.png"
                alt="Buckeye Plumber"
                className="w-12 sm:w-16 h-auto object-contain drop-shadow-lg"
              />
              <Link
                to="/services"
                className="inline-flex items-center text-buckeye-red font-bold text-lg hover:text-buckeye-red-dark transition-colors group"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Image Showcase - Order 1 on mobile, 2 on desktop */}
          <div className="relative order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-buckeye-red/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gray-200 rounded-full blur-xl" />

              {/* Image Container */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService?.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="aspect-[4/3] relative"
                  >
                    <img
                      src={activeService?.image}
                      alt={activeService?.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Service Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.h3
                        key={activeService?.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-3xl font-bold font-display text-white drop-shadow-lg"
                      >
                        {activeService?.title}
                      </motion.h3>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Quick CTA */}
                <div className="p-4 md:p-6 bg-white">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3.5 bg-buckeye-red text-white font-bold rounded-full hover:bg-buckeye-red-dark transition-colors shadow-md active:scale-95"
                    >
                      Get a Free Quote
                    </Link>
                    <a
                      href="tel:2394386662"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3.5 border-2 border-gray-200 text-gray-700 font-bold rounded-full hover:border-buckeye-red hover:text-buckeye-red transition-colors active:scale-95"
                    >
                      (239) 438-6662
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
