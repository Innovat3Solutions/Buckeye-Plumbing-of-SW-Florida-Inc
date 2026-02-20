import { MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const primaryAreas = [
  'Naples',
  'Fort Myers',
  'Cape Coral',
  'Lehigh Acres',
  'Marco Island',
  'Bonita Springs',
];

const extendedAreas = [
  'Port Charlotte',
  'Sarasota',
  'Estero',
  'North Naples',
];

export default function ServiceAreaMap() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - Order 2 on mobile */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6">
                Serving All of <span className="text-buckeye-red">Southwest Florida</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                From Marco Island to Sarasota and beyond, our team is ready to dispatch to your location.
              </p>
            </motion.div>

            {/* Primary Service Areas */}
            <div className="mb-5 md:mb-6">
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 md:mb-4">Primary Service Areas</h3>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {primaryAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2 text-gray-800 font-semibold bg-red-50 px-3 md:px-4 py-2 md:py-2.5 rounded-lg text-sm md:text-base"
                  >
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-buckeye-red flex-shrink-0" />
                    {area}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Extended Service Areas */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 md:mb-4">Extended Service Areas</h3>
              <div className="grid grid-cols-2 gap-2">
                {extendedAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
                    className="flex items-center gap-2 text-gray-600 font-medium text-sm"
                  >
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 flex-shrink-0" />
                    {area}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-5 md:p-6 bg-gray-50 rounded-xl border border-gray-100"
            >
              <h3 className="text-lg md:text-xl font-bold font-display text-gray-900 mb-2">Not sure if we cover your area?</h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">Give us a call! We likely have a technician nearby.</p>
              <a
                href="tel:2394386662"
                className="inline-flex items-center gap-2 bg-buckeye-red text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-red-700 transition-colors active:scale-95"
              >
                <Phone className="w-4 h-4" />
                (239) 438-6662
              </a>
            </motion.div>
          </div>

          {/* Google Maps Embed - Order 1 on mobile (shows first) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 md:mb-4 text-center lg:text-left">Our Service Area</h3>
            <div className="relative aspect-[4/3] md:aspect-square max-h-[400px] md:max-h-[500px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229032.26962958332!2d-81.94059247167966!3d26.24195505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db104c1cfa21e7%3A0xf11c1aea1fb0bf2c!2sNaples%2C%20FL!5e0!3m2!1sen!2sus!4v1708012800000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Buckeye Plumbing Service Area - Naples, Florida"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
