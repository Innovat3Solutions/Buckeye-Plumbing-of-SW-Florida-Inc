import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Mobile Quick Call CTA - Only visible on mobile */}
      <div className="md:hidden bg-buckeye-red px-4 py-4">
        <a
          href="tel:2394386662"
          className="flex items-center justify-center gap-3 bg-white text-buckeye-red py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
        >
          <Phone className="w-6 h-6 fill-current" />
          Call Now: (239) 438-6662
        </a>
        <p className="text-center text-white/80 text-sm mt-2">24/7 Emergency Service Available</p>
      </div>

      {/* Header Section - Reduced padding on mobile */}
      <div className="pt-8 md:pt-20 pb-12 md:pb-32 text-center relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_white_1px,_transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 text-white"
          >
            Need Help Now? <span className="text-buckeye-red">Let's Talk.</span>
          </motion.h1>
          <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto hidden md:block">
            24/7 Emergency Service Available. Call us or fill out the form below and we'll get back to you right away.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-gray-100 relative">
        {/* Curved Top Edge */}
        <div className="absolute -top-8 md:-top-16 left-0 right-0 h-8 md:h-16 bg-gray-100 rounded-t-[2rem] md:rounded-t-[3rem]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 relative">
          {/* Mobile: Contact Info First, Then Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative">
            {/* Mascot - Behind the card, upper body visible (desktop only) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:block absolute -left-4 xl:-left-8 -top-44 xl:-top-52 w-52 xl:w-64 z-0 pointer-events-none"
            >
              <img
                src="/assets/mascot-phone.png"
                alt="Buckeye Plumber on Phone"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Contact Info Card - Shows first on mobile due to grid order */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1 relative z-10 order-1 lg:order-1"
            >
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 h-full">
                <h3 className="text-xl md:text-2xl font-bold font-display text-gray-900 mb-4 md:mb-6">Contact Information</h3>

                {/* Mobile: Compact grid layout */}
                <div className="grid grid-cols-2 gap-4 md:hidden">
                  <a href="tel:2394386662" className="flex flex-col items-center p-4 bg-red-50 rounded-xl text-center active:scale-95 transition-transform">
                    <div className="w-12 h-12 bg-buckeye-red rounded-full flex items-center justify-center mb-2">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm">Call Us</span>
                    <span className="text-buckeye-red text-xs font-medium">24/7</span>
                  </a>
                  <a href="mailto:buckeyeplumbingswfl@gmail.com" className="flex flex-col items-center p-4 bg-gray-50 rounded-xl text-center active:scale-95 transition-transform">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                      <Mail className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm">Email</span>
                    <span className="text-gray-500 text-xs">Send Message</span>
                  </a>
                </div>

                {/* Mobile: Service Area & Hours in compact view */}
                <div className="mt-4 p-4 bg-gray-50 rounded-xl md:hidden">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-buckeye-red" />
                    <span className="font-bold text-gray-900 text-sm">Service Area</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Naples, Fort Myers, Cape Coral, Bonita Springs, Marco Island, Lehigh Acres & More
                  </p>
                </div>

                {/* Desktop: Original layout */}
                <div className="hidden md:block space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-buckeye-red/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-buckeye-red" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Phone</p>
                      <a href="tel:2394386662" className="text-buckeye-red hover:text-buckeye-red-dark transition-colors text-lg font-bold">
                        (239) 438-6662
                      </a>
                      <p className="text-xs text-gray-500 mt-1">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-buckeye-red/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-buckeye-red" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Email</p>
                      <a href="mailto:buckeyeplumbingswfl@gmail.com" className="text-gray-600 hover:text-buckeye-red transition-colors text-sm">
                        buckeyeplumbingswfl@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-buckeye-red/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-buckeye-red" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Service Area</p>
                      <p className="text-gray-600 text-sm">
                        Naples, Fort Myers, Lehigh Acres,<br />
                        Marco Island, Bonita Springs,<br />
                        Cape Coral, Port Charlotte & More
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-buckeye-red/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-buckeye-red" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Hours</p>
                      <p className="text-gray-600 text-sm">
                        Open 24/7<br />
                        Emergency Service Available
                      </p>
                    </div>
                  </div>

                  {/* Quick Call CTA - Desktop only */}
                  <div className="pt-6 border-t border-gray-100">
                    <a
                      href="tel:2394386662"
                      className="flex items-center justify-center gap-2 w-full bg-buckeye-red text-white py-4 rounded-xl font-bold hover:bg-buckeye-red-dark transition-colors shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 relative z-10 order-2 lg:order-2"
            >
              <ContactForm />
            </motion.div>
          </div>

          {/* Map Section - Reduced height on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-16"
          >
            <h3 className="text-xl md:text-2xl font-bold font-display text-gray-900 mb-4 md:mb-6 text-center">Our Service Area</h3>
            <div className="bg-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113845.56475662768!2d-81.87232934179688!3d26.142035799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dae19b73c2d7ad%3A0x673f5f18e510c94c!2sNaples%2C%20FL!5e0!3m2!1sen!2sus!4v1684428956789!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
                className="md:h-[400px]"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
