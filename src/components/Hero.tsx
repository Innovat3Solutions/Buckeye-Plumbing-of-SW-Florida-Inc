import { Phone, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-gray-900 pt-16 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2072&auto=format&fit=crop"
          alt="Professional Plumber Working"
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Gradient Overlay - Clean & Professional */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90 md:bg-gradient-to-r md:from-gray-900 md:via-gray-900/90 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto md:mx-0 text-center md:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium text-white mb-4 md:mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available 24/7 for Emergency Service
          </div>
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-white mb-4 md:mb-6">
            Southwest Florida’s <br className="hidden md:block" />
            <span className="text-buckeye-red block md:inline mt-1 md:mt-0">Most Trusted Plumbers</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
            Reliable, licensed, and community-focused. We provide expert residential and commercial plumbing services to Naples, Estero, Bonita Springs, and Marco Island.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 justify-center md:justify-start relative">
            {/* Mascot Pointing */}
            <div className="hidden md:block absolute -right-40 -bottom-20 w-48 h-auto pointer-events-none">
               <img 
                src="/assets/mascot-pointing.png" 
                alt="Buckeye Plumber Pointing" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>

            <a
              href="tel:2394386662"
              className="flex items-center justify-center gap-2 bg-buckeye-red hover:bg-red-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-red-900/20 transform hover:-translate-y-0.5 active:scale-95"
            >
              <Phone className="w-5 h-5" />
              (239) 438-6662
            </a>
            
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg transform hover:-translate-y-0.5 active:scale-95"
            >
              <Calendar className="w-5 h-5 text-buckeye-red" />
              Schedule Online
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 text-xs md:text-sm font-medium text-gray-400 border-t border-white/10 pt-4 md:pt-8">
            <div className="flex items-center gap-1.5 bg-gray-800/50 md:bg-transparent px-3 py-1.5 rounded-full md:p-0">
              <CheckCircle className="w-3.5 h-3.5 text-buckeye-red" />
              <span>Licensed #CFC1429403</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-800/50 md:bg-transparent px-3 py-1.5 rounded-full md:p-0">
              <CheckCircle className="w-3.5 h-3.5 text-buckeye-red" />
              <span>Insured & Bonded</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-800/50 md:bg-transparent px-3 py-1.5 rounded-full md:p-0">
              <CheckCircle className="w-3.5 h-3.5 text-buckeye-red" />
              <span>Same-Day Service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
