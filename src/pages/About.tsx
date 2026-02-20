import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Clock, Award, Wrench, Building2, Home, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceAreas = [
  'Naples',
  'Lehigh Acres',
  'Fort Myers',
  'Marco Island',
  'Port Charlotte',
  'Bonita Springs',
  'Cape Coral',
  'Sarasota',
  'Boca Raton',
];

const expertise = [
  {
    icon: Home,
    title: 'Residential Plumbing',
    description: 'From leaking faucets to complete repiping, we handle all home plumbing needs with care and expertise.',
  },
  {
    icon: Building2,
    title: 'Commercial Plumbing',
    description: 'Serving restaurants, office buildings, HOAs, and retail outlets throughout Southwest Florida.',
  },
  {
    icon: Wrench,
    title: 'New Construction',
    description: 'Complete plumbing systems for new builds and remodels. Contractors, never hesitate to call us.',
  },
  {
    icon: Award,
    title: '25 Years Experience',
    description: 'Decades of hands-on expertise solving every plumbing challenge imaginable.',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/service-images/service-new-construction.png"
            alt="Plumbing Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-display font-bold mb-6"
              >
                About <span className="text-buckeye-red">Buckeye Plumbing</span>
              </motion.h1>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                25 years of professional plumbing excellence serving Southwest Florida. Licensed, insured, and committed to 100% customer satisfaction.
              </p>
            </div>

            {/* Mascot - Phone/Presenting */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-24 lg:w-48 xl:w-56 flex-shrink-0"
            >
              <img
                src="/assets/mascot-phone.png"
                alt="Buckeye Mascot on Phone"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Your Trusted <span className="text-buckeye-red">SW Florida Plumbers</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  We are a licensed and insured plumbing company in the State of Florida with <strong>25 years of experience</strong> serving residential and commercial customers. From buildings and restaurants to residences and retail outlets, we've seen and solved it all.
                </p>
                <p>
                  When you need plumbing service—whether Commercial or Residential—call on the professionals at Buckeye Plumbing of SW FL Inc. From a simple leaking faucet to more serious problems like a leaking water heater or clogged sewer line, our mission is to be your only professional to call.
                </p>
                <p>
                  We offer prompt service by licensed and qualified plumbers, and we always treat your home with the care and respect it deserves. We're known for having the <strong>best prices in Southwest Florida</strong>, plus we offer <strong>FREE estimates</strong>.
                </p>
                <p className="font-semibold text-gray-900 text-xl border-l-4 border-buckeye-red pl-4">
                  100% Satisfaction Guarantee on all products and services.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <ShieldCheck className="w-10 h-10 text-buckeye-red mb-3" />
                  <span className="font-bold text-gray-900">Licensed & Insured</span>
                  <span className="text-xs text-gray-500">CFC1429403</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Award className="w-10 h-10 text-buckeye-red mb-3" />
                  <span className="font-bold text-gray-900">25 Years</span>
                  <span className="text-xs text-gray-500">Experience</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Clock className="w-10 h-10 text-buckeye-red mb-3" />
                  <span className="font-bold text-gray-900">Open 24/7</span>
                  <span className="text-xs text-gray-500">Emergency Ready</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-buckeye-red rounded-full opacity-10 z-0" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-200 rounded-full opacity-50 z-0" />
              {/* Mobile: Show full van with logo visible */}
              <img
                src="/assets/service-images/hero-van.png"
                alt="Buckeye Plumbing Van at Job Site"
                className="relative z-10 rounded-2xl shadow-2xl w-full object-contain md:object-cover h-auto md:h-[600px] bg-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Our <span className="text-buckeye-red">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get the job done right, from Commercial to Residential Plumbing. We are specialists in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center group"
              >
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-buckeye-red transition-colors">
                  <item.icon className="w-8 h-8 text-buckeye-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Mascot - Waving */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-24 lg:w-40 xl:w-48 flex-shrink-0"
            >
              <img
                src="/assets/mascot-waving.png"
                alt="Buckeye Plumber Waving"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-buckeye-red" />
                <h2 className="text-4xl font-display font-bold">Service Areas</h2>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                We proudly serve homeowners and businesses throughout Southwest Florida and beyond.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <CheckCircle className="w-5 h-5 text-buckeye-red flex-shrink-0" />
                    <span className="font-medium">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Contact us today for a FREE estimate. We're available 24/7 for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2394386662"
              className="inline-flex items-center justify-center gap-3 bg-buckeye-red hover:bg-buckeye-red-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              (239) 438-6662
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-bold text-lg hover:border-buckeye-red hover:text-buckeye-red transition-colors"
            >
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
