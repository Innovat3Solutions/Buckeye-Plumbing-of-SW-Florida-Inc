import { Clock, ShieldCheck, Calendar, Building2, BadgeDollarSign, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: "Plumbing disasters don't wait for business hours. Neither do we.",
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'State Certified Plumbing Contractor #CFC1429403. Fully insured for your peace of mind.',
  },
  {
    icon: Calendar,
    title: 'Same-Day Appointments',
    description: 'Fast scheduling available. We value your time and arrive ready to work.',
  },
  {
    icon: Building2,
    title: 'Residential & Commercial',
    description: 'From cozy homes to large commercial properties, we handle it all.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Free Estimates',
    description: 'Transparent pricing with no hidden fees. Get a quote before we start.',
  },
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'Local technicians in SW Florida ready to dispatch to your location quickly.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Why Choose <span className="text-buckeye-red">Buckeye Plumbing?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            SW Florida's Most Reliable & Friendly Plumbing Service. "Forget the Rest, We Are the Best"
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-buckeye-red/5 transition-all duration-300 border border-gray-100 group min-w-[85vw] md:min-w-0 snap-center flex flex-col items-start hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-buckeye-red transition-all duration-300 shrink-0 shadow-sm group-hover:shadow-lg group-hover:rotate-3">
                <feature.icon className="w-7 h-7 text-buckeye-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display tracking-tight group-hover:text-buckeye-red transition-colors">{feature.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA with Mascot */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 relative">
          {/* Mascot - Desktop: Large, Mobile: Small inline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-20 md:w-40 lg:w-48 flex-shrink-0"
          >
            <img
              src="/assets/mascot-waving.png"
              alt="Buckeye Plumber Waving"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          <div className="text-center md:text-left">
            <p className="text-base md:text-lg text-gray-600 mb-4">Ready to experience the Buckeye difference?</p>
            <a
              href="tel:2394386662"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 text-base md:text-lg font-bold text-white transition-all duration-200 bg-buckeye-red rounded-full hover:bg-red-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
            >
              Get a Free Estimate Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
