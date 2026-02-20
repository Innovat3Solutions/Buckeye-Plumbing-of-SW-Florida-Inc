import { Phone, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85dvh] md:min-h-[95dvh] lg:min-h-[100dvh] flex items-center overflow-hidden bg-gray-900 pt-16 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/service-images/hero-van.png"
          alt="Buckeye Plumbing Van at Construction Site"
          className="w-full h-full object-cover object-center opacity-60 contrast-110 saturate-110 transform scale-105"
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto md:mx-0 text-center md:text-left lg:flex-1"
          >
            {/* Badge - Premium Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 md:px-5 py-2 rounded-full text-[11px] md:text-sm font-semibold text-white mb-5 md:mb-10 shadow-2xl"
            >
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-green-500"></span>
              </span>
              <span className="tracking-wide uppercase">24/7 Emergency Service</span>
            </motion.div>

            {/* Headline */}
            <div className="mb-6 md:mb-8 relative">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] text-white tracking-tight drop-shadow-lg">
                Southwest Florida's <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-buckeye-red to-buckeye-red-light">Most Trusted</span>
                <br className="md:hidden" /> Plumbers
              </h1>
              {/* Slogan */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-4 md:mt-6 text-xl md:text-2xl font-medium text-white/80 italic tracking-wide"
              >
                "Forget the rest, we are the best."
              </motion.p>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-xl md:text-2xl text-gray-300/90 mb-8 md:mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light tracking-wide border-l-4 border-buckeye-red pl-6 hidden md:block">
              Reliable, licensed, and community-focused. Expert residential and commercial plumbing for Naples, Estero, Bonita Springs, and Marco Island.
            </p>
            <p className="text-base text-gray-300/90 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed font-light md:hidden">
              Reliable, licensed, and community-focused. Expert residential and commercial plumbing for Southwest Florida.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start relative z-20">
              <a
                href="tel:2394386662"
                className="group flex items-center justify-center gap-3 bg-buckeye-red hover:bg-buckeye-red-dark text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-buckeye-red/30 transform hover:-translate-y-1 active:scale-95"
              >
                <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                (239) 438-6662
              </a>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-white/20 transform hover:-translate-y-1 active:scale-95"
              >
                <Calendar className="w-5 h-5 text-buckeye-red" />
                Schedule Online
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-start md:justify-start gap-3 md:gap-8 mt-8 md:mt-16 border-t border-white/5 pt-6 md:pt-8 pr-28 md:pr-0">
              {[
                { text: "Licensed", mobileText: "Licensed", delay: 0.6 },
                { text: "Insured & Bonded", mobileText: "Insured", delay: 0.7 },
                { text: "Same-Day Service", mobileText: "Same-Day", delay: 0.8 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                  className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider"
                >
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-buckeye-red flex-shrink-0" />
                  <span className="md:hidden">{item.mobileText}</span>
                  <span className="hidden md:inline">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mascot - Desktop: beside content, Mobile: corner decoration */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, type: "spring", bounce: 0.3 }}
            className="hidden lg:flex lg:flex-shrink-0 lg:w-[400px] xl:w-[500px] items-end justify-center relative"
          >
            <img
              src="/assets/mascot-thumbs-up.png"
              alt="Buckeye Plumber Mascot"
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile Mascot - Bottom right corner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-4 right-2 w-24 h-auto z-10 lg:hidden pointer-events-none"
      >
        <img
          src="/assets/mascot-thumbs-up.png"
          alt="Buckeye Plumber"
          className="w-full h-auto object-contain drop-shadow-2xl opacity-90"
        />
      </motion.div>
    </section>
  );
}
