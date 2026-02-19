import { motion } from 'motion/react';
import { Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Leak & Pipe Repair',
    description: 'Fast leak detection, repair or replacement with minimal disruption. Includes slab leaks, pinhole leaks, pipe bursting.',
    bullets: ['Fast Same-Day Repairs', 'Pipe Replacement', 'Water Line Repair'],
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Water Heater Services',
    description: 'Repair or replace any size water heater — gas or electric. We service all major brands and offer tankless upgrades.',
    bullets: ['Tank & Tankless', 'Maintenance & Flush', 'Emergency Replacement'],
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Drain Cleaning & Jetting',
    description: 'Clear clogged drains fast with our professional equipment. From kitchen sinks to main sewer lines.',
    bullets: ['Hydro Jetting', 'Camera Inspection', 'Root Removal'],
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2074&auto=format&fit=crop',
  },
  {
    title: 'Garbage Disposal',
    description: 'Installation and repair of all major disposal brands. Keep your kitchen running smoothly.',
    bullets: ['Jam Removal', 'New Installation', 'Quiet Models'],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Kitchen & Bathroom Plumbing',
    description: 'Faucet, sink, toilet, and shower installation and repair. Upgrade your fixtures with our help.',
    bullets: ['Fixture Installation', 'Toilet Repair', 'Shower Valves'],
    image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'New Construction & Remodel',
    description: 'Complete plumbing systems for new homes and remodels. We work with contractors and homeowners.',
    bullets: ['Rough-ins', 'Final Trim', 'Code Compliance'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
  },
  {
    title: 'Repiping Services',
    description: 'Replace old, corroded pipes with modern, durable materials like PEX or Copper.',
    bullets: ['Whole Home Repipe', 'PEX & Copper', 'Drywall Repair Coordination'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Commercial Plumbing',
    description: 'Reliable plumbing solutions for businesses and properties. HOAs, restaurants, and office buildings.',
    bullets: ['Backflow Testing', 'Grease Traps', 'Tenant Build-outs'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Professional Plumbing Services in <span className="text-buckeye-red">Southwest Florida</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Buckeye Plumbing offers licensed, insured plumbing solutions for residential and commercial customers, available 24/7 with same-day service where possible.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 h-64 md:h-auto relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <h3 className="text-2xl font-bold font-display text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-gray-700 font-medium">
                      <CheckCircle className="w-5 h-5 text-buckeye-red" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-buckeye-red text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-md"
                  >
                    Get an Instant Quote
                  </Link>
                  <a
                    href="tel:2394386662"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-full hover:border-buckeye-red hover:text-buckeye-red transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" /> (239) 438-6662
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto mt-20 px-4 text-center">
        <h2 className="text-3xl font-display font-bold mb-6">Don't See What You Need?</h2>
        <p className="text-lg text-gray-600 mb-8">
          We handle custom plumbing projects and unique situations every day. Give us a call to discuss your specific needs.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg text-lg"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
}
