import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, CheckCircle, Home, Building2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

type Category = 'residential' | 'commercial' | 'emergency';

interface Service {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  category: Category;
}

const categories = [
  { id: 'residential' as Category, label: 'Residential', icon: Home },
  { id: 'commercial' as Category, label: 'Commercial', icon: Building2 },
  { id: 'emergency' as Category, label: 'Emergency 24/7', icon: AlertCircle },
];

const services: Service[] = [
  // Residential Services
  {
    title: 'Leak & Pipe Repair',
    description: 'Fast leak detection, repair or replacement with minimal disruption. Includes slab leaks, pinhole leaks, and pipe bursting.',
    bullets: ['Fast Same-Day Repairs', 'Pipe Replacement', 'Water Line Repair'],
    image: '/assets/service-images/service-leak-repair.png',
    category: 'residential',
  },
  {
    title: 'Water Heater Services',
    description: 'Repair or replace any size water heater, gas or electric. We service all major brands and offer tankless upgrades.',
    bullets: ['Tank & Tankless', 'Maintenance & Flush', 'Emergency Replacement'],
    image: '/assets/service-images/service-water-heater.png',
    category: 'residential',
  },
  {
    title: 'Drain Cleaning & Jetting',
    description: 'Clear clogged drains fast with our professional equipment. From kitchen sinks to main sewer lines.',
    bullets: ['Hydro Jetting', 'Camera Inspection', 'Root Removal'],
    image: '/assets/service-images/service-drain-cleaning.png',
    category: 'residential',
  },
  {
    title: 'Garbage Disposal',
    description: 'Installation and repair of all major disposal brands. Keep your kitchen running smoothly.',
    bullets: ['Jam Removal', 'New Installation', 'Quiet Models'],
    image: '/assets/service-images/service-garbage-disposal.png',
    category: 'residential',
  },
  {
    title: 'Kitchen & Bathroom Plumbing',
    description: 'Faucet, sink, toilet, and shower installation and repair. Upgrade your fixtures with our help.',
    bullets: ['Fixture Installation', 'Toilet Repair', 'Shower Valves'],
    image: '/assets/service-images/service-kitchen-plumbing.png',
    category: 'residential',
  },
  {
    title: 'Repiping Services',
    description: 'Replace old, corroded pipes with modern, durable materials like PEX or Copper.',
    bullets: ['Whole Home Repipe', 'PEX & Copper', 'Drywall Repair Coordination'],
    image: '/assets/service-images/service-repiping.png',
    category: 'residential',
  },
  // Commercial Services
  {
    title: 'Commercial Plumbing',
    description: 'Reliable plumbing solutions for businesses and properties. HOAs, restaurants, and office buildings.',
    bullets: ['Backflow Testing', 'Grease Traps', 'Tenant Build-outs'],
    image: '/assets/service-images/service-commercial.png',
    category: 'commercial',
  },
  {
    title: 'New Construction & Remodel',
    description: 'Complete plumbing systems for new commercial builds and remodels. We work with contractors and property managers.',
    bullets: ['Rough-ins', 'Final Trim', 'Code Compliance'],
    image: '/assets/service-images/service-new-construction.png',
    category: 'commercial',
  },
  {
    title: 'Backflow Prevention',
    description: 'Protect your water supply with certified backflow testing and installation. Required for many commercial properties.',
    bullets: ['Annual Testing', 'Certification', 'Installation & Repair'],
    image: '/assets/service-images/service-commercial-2.jpg',
    category: 'commercial',
  },
  {
    title: 'Grease Trap Services',
    description: 'Keep your restaurant or commercial kitchen compliant with regular grease trap cleaning and maintenance.',
    bullets: ['Scheduled Cleaning', 'Installation', 'Compliance Support'],
    image: '/assets/service-images/service-new-construction-2.jpg',
    category: 'commercial',
  },
  // Emergency Services
  {
    title: 'Emergency Leak Repair',
    description: 'Burst pipes or major leaks? Our emergency team responds fast, day or night, to minimize water damage.',
    bullets: ['24/7 Response', 'Water Shut-Off', 'Damage Prevention'],
    image: '/assets/service-images/service-leak-repair.png',
    category: 'emergency',
  },
  {
    title: 'Burst Pipe Response',
    description: 'Immediate response to burst pipes. We locate, isolate, and repair quickly to protect your property.',
    bullets: ['Rapid Response', 'Pipe Isolation', 'Same-Day Repair'],
    image: '/assets/service-images/service-repiping.png',
    category: 'emergency',
  },
  {
    title: 'Sewer Line Emergency',
    description: 'Sewage backup or main line blockage? We have the equipment and expertise to restore flow immediately.',
    bullets: ['Sewage Cleanup', 'Line Clearing', 'Camera Diagnosis'],
    image: '/assets/service-images/service-drain-jetting.png',
    category: 'emergency',
  },
  {
    title: 'Water Heater Emergency',
    description: 'No hot water or a leaking tank? We provide emergency water heater service around the clock.',
    bullets: ['Emergency Repair', 'Same-Day Replacement', 'All Brands'],
    image: '/assets/service-images/service-water-heater-2.jpg',
    category: 'emergency',
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<Category>('residential');

  const filteredServices = services.filter((s) => s.category === activeTab);

  return (
    <div className="bg-gray-50 pb-8 md:pb-20">
      {/* Header with Mascot */}
      <div className="bg-gray-900 text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/service-images/service-drain-cleaning.png"
            alt="Plumbing Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6"
              >
                Professional Plumbing Services in <span className="text-buckeye-red">Southwest Florida</span>
              </motion.h1>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-3xl">
                Licensed, insured plumbing solutions for residential and commercial customers, available 24/7.
              </p>
            </div>

            {/* Mascot - Toolbox */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-24 lg:w-48 xl:w-56 flex-shrink-0"
            >
              <img
                src="/assets/mascot-toolbox.png"
                alt="Buckeye Mascot with Toolbox"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tab Navigation - Sticky below header */}
      <div className="sticky top-[76px] md:top-[88px] z-40 bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center gap-2 py-3 md:py-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`
                    flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full font-bold text-xs md:text-sm uppercase tracking-wide transition-all duration-300 whitespace-nowrap flex-shrink-0 active:scale-95
                    ${isActive
                      ? 'bg-buckeye-red text-white shadow-lg shadow-buckeye-red/30'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Image */}
                <div className="h-44 md:h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <h3 className="absolute bottom-3 md:bottom-4 left-4 md:left-6 right-4 md:right-6 z-20 text-xl md:text-2xl font-bold font-display text-white drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <p className="text-gray-600 mb-4 md:mb-5 leading-relaxed text-sm md:text-base">{service.description}</p>

                  <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-gray-700 text-xs md:text-sm font-medium">
                        <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-buckeye-red flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2 md:gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 inline-flex items-center justify-center px-4 md:px-5 py-2.5 md:py-2.5 bg-buckeye-red text-white font-bold text-xs md:text-sm rounded-full hover:bg-red-700 transition-colors shadow-md active:scale-95"
                    >
                      Get a Quote
                    </Link>
                    <a
                      href="tel:2394386662"
                      className="flex-1 inline-flex items-center justify-center px-4 md:px-5 py-2.5 md:py-2.5 border-2 border-gray-200 text-gray-700 font-bold text-xs md:text-sm rounded-full hover:border-buckeye-red hover:text-buckeye-red transition-colors active:scale-95"
                    >
                      <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" /> Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom CTA with Mascot */}
      <div className="max-w-7xl mx-auto mt-4 md:mt-8 px-4">
        <div className="bg-gray-900 rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Mascot - Pointing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden md:block w-40 lg:w-48 flex-shrink-0"
            >
              <img
                src="/assets/mascot-pointing.png"
                alt="Buckeye Mascot Pointing"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            <div className="flex-1 text-center md:text-left text-white">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">Don't See What You Need?</h2>
              <p className="text-base md:text-lg text-gray-400 mb-5 md:mb-6">
                We handle custom plumbing projects every day. Give us a call to discuss your needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 bg-buckeye-red text-white font-bold rounded-full hover:bg-buckeye-red-dark transition-colors shadow-lg text-base md:text-lg active:scale-95"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
