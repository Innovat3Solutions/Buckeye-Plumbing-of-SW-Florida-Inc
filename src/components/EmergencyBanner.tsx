import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function EmergencyBanner() {
  return (
    <section className="bg-gray-900 text-white py-12 md:py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_white_1px,_transparent_1px)] bg-[length:30px_30px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Mascot - Running (Emergency Response) - Visible on all screens */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-28 md:w-48 lg:w-56 flex-shrink-0"
          >
            <img
              src="/assets/mascot-running.png"
              alt="Buckeye Plumber Running to Help"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-buckeye-red/20 text-buckeye-red px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                24/7 Emergency Service
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                Need Emergency Plumbing?
                <br />
                <span className="text-buckeye-red">We're Here 24/7!</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8">
                Burst pipes, major leaks, or sewage backups? Don't wait! Our emergency team responds fast, day or night.
              </p>
            </motion.div>

            {/* Phone CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="tel:2394386662"
                className="group flex items-center gap-3 bg-buckeye-red hover:bg-buckeye-red-dark text-white px-8 py-4 rounded-full font-bold text-xl transition-all shadow-lg hover:shadow-buckeye-red/30 transform hover:-translate-y-1"
              >
                <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                (239) 438-6662
              </a>
              <span className="text-gray-500 font-medium">Call Now</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
