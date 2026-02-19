import { Clock, ShieldCheck, Calendar, Building2, BadgeDollarSign, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Plumbing disasters don’t wait for business hours. Neither do we.',
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Why Choose <span className="text-buckeye-red">Buckeye Plumbing?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            SW Florida’s Most Reliable & Friendly Plumbing Service — “Forget the Rest, We Are the Best”
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
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group min-w-[85vw] md:min-w-0 snap-center flex flex-col"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-buckeye-red transition-colors duration-300 shrink-0">
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-buckeye-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 font-display tracking-wide">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="tel:2394386662"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-buckeye-red rounded-full hover:bg-red-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get a Free Estimate Today
          </a>
        </div>
      </div>
    </section>
  );
}
