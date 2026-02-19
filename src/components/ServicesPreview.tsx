import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Droplets, Flame, Waves, Trash2, Bath, Hammer, RefreshCw, Building } from 'lucide-react';

const services = [
  {
    title: 'Leak & Pipe Repair',
    description: 'Fast leak detection, repair or replacement with minimal disruption.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Water Heater Services',
    description: 'Repair or replace any size water heater — gas or electric.',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Drain Cleaning & Jetting',
    description: 'Clear clogged drains fast with our professional equipment.',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2074&auto=format&fit=crop',
  },
  {
    title: 'Garbage Disposal',
    description: 'Installation and repair of all major disposal brands.',
    icon: Trash2,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Kitchen & Bath',
    description: 'Faucet, sink, toilet, and shower installation and repair.',
    icon: Bath,
    image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'New Construction',
    description: 'Complete plumbing systems for new homes and remodels.',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
  },
  {
    title: 'Repiping Services',
    description: 'Replace old, corroded pipes with modern, durable materials.',
    icon: RefreshCw,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Commercial Plumbing',
    description: 'Reliable plumbing solutions for businesses and properties.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our <span className="text-buckeye-red">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From simple leaks to full system installations — we do it all with professionalism and a smile.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 min-w-[80vw] md:min-w-0 snap-center"
            >
              {/* Image Background on Hover? Or just top image */}
              <div className="h-40 md:h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 p-2 rounded-full shadow-sm">
                  <service.icon className="w-5 h-5 text-buckeye-red" />
                </div>
              </div>
              
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold font-display text-gray-900 mb-2 group-hover:text-buckeye-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-sm font-bold text-buckeye-red hover:text-red-700 transition-colors uppercase tracking-wide"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center relative">
           <div className="hidden md:block absolute left-20 bottom-0 w-32 pointer-events-none opacity-90">
              <img 
                src="/assets/mascot-toolbox.png" 
                alt="Buckeye Plumber with Toolbox" 
                className="w-full h-auto object-contain"
              />
           </div>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-buckeye-red text-lg font-bold text-buckeye-red hover:bg-buckeye-red hover:text-white transition-all duration-200 rounded-full"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
