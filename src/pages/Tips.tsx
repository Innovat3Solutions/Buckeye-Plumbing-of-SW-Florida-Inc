import { motion } from 'motion/react';
import {
  Droplets,
  Thermometer,
  AlertTriangle,
  Wrench,
  Home,
  DollarSign,
  Phone,
  CheckCircle,
  Lightbulb,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Tip {
  icon: React.ElementType;
  title: string;
  description: string;
  tips: string[];
  category: 'prevention' | 'maintenance' | 'emergency' | 'savings';
}

const plumbingTips: Tip[] = [
  {
    icon: Droplets,
    title: 'Preventing Leaks',
    description: 'Small leaks can lead to big problems. Here\'s how to catch them early.',
    tips: [
      'Check under sinks monthly for moisture or water stains',
      'Monitor your water bill for unexpected increases',
      'Inspect visible pipes for corrosion or mineral buildup',
      'Replace washing machine hoses every 3-5 years',
      'Know where your main water shut-off valve is located',
    ],
    category: 'prevention',
  },
  {
    icon: Thermometer,
    title: 'Water Heater Care',
    description: 'Extend the life of your water heater with proper maintenance.',
    tips: [
      'Flush your tank water heater annually to remove sediment',
      'Set temperature to 120°F to prevent scalding and save energy',
      'Check the pressure relief valve yearly for proper operation',
      'Inspect the anode rod every 2-3 years and replace if needed',
      'Listen for rumbling sounds which indicate sediment buildup',
    ],
    category: 'maintenance',
  },
  {
    icon: AlertTriangle,
    title: 'Drain Maintenance',
    description: 'Keep your drains flowing freely with these simple habits.',
    tips: [
      'Use drain screens to catch hair and debris',
      'Never pour grease or oil down the drain',
      'Run hot water after each use to prevent buildup',
      'Clean pop-up stoppers in sinks monthly',
      'Avoid chemical drain cleaners as they can damage pipes',
    ],
    category: 'maintenance',
  },
  {
    icon: Home,
    title: 'Seasonal Preparation',
    description: 'Protect your plumbing from Florida\'s unique climate challenges.',
    tips: [
      'Insulate exposed pipes before rare cold snaps',
      'Know how to shut off outdoor water for freezing weather',
      'Check irrigation systems seasonally for leaks',
      'Clean gutters to prevent water damage to your foundation',
      'Have your septic system inspected every 3-5 years',
    ],
    category: 'prevention',
  },
  {
    icon: DollarSign,
    title: 'Water-Saving Tips',
    description: 'Reduce your water bill while helping the environment.',
    tips: [
      'Fix dripping faucets because they waste gallons daily',
      'Install low-flow showerheads and faucet aerators',
      'Check toilets for leaks with food coloring in the tank',
      'Water your lawn early morning to reduce evaporation',
      'Consider a tankless water heater for on-demand efficiency',
    ],
    category: 'savings',
  },
  {
    icon: Wrench,
    title: 'Emergency Preparedness',
    description: 'Know what to do when plumbing emergencies strike.',
    tips: [
      'Locate and label your main water shut-off valve',
      'Keep a plunger in every bathroom',
      'Know how to shut off water to individual fixtures',
      'Keep our emergency number handy: (239) 438-6662',
      'Don\'t wait! Small issues become big problems fast',
    ],
    category: 'emergency',
  },
];

const quickFacts = [
  {
    stat: '10%',
    description: 'of homes have leaks wasting 90+ gallons daily',
  },
  {
    stat: '1 Drip/Sec',
    description: 'wastes over 3,000 gallons per year',
  },
  {
    stat: '8-12 Years',
    description: 'average water heater lifespan',
  },
  {
    stat: '24/7',
    description: 'we\'re available for emergencies',
  },
];

export default function Tips() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/service-images/service-water-heater.png"
            alt="Plumbing Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-buckeye-red/20 text-buckeye-red px-4 py-2 rounded-full text-sm font-bold mb-6"
              >
                <Lightbulb className="w-4 h-4" />
                Expert Advice
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              >
                Plumbing <span className="text-buckeye-red">Tips & Advice</span>
              </motion.h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                From our 25 years of experience, practical tips to help you maintain your plumbing, save money, and know when to call the pros.
              </p>
            </div>

            {/* Mascot - Thinking */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:block w-48 xl:w-56 flex-shrink-0"
            >
              <img
                src="/assets/mascot-thinking.png"
                alt="Buckeye Mascot Thinking"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-buckeye-red mb-2">{fact.stat}</div>
                <p className="text-sm text-gray-600">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Expert <span className="text-buckeye-red">Plumbing Tips</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple maintenance can prevent costly repairs. Here's advice from our licensed plumbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plumbingTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-buckeye-red transition-colors">
                      <tip.icon className="w-7 h-7 text-buckeye-red group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-gray-900 mb-1">{tip.title}</h3>
                      <p className="text-sm text-gray-500">{tip.description}</p>
                    </div>
                  </div>
                </div>

                {/* Tips List */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {tip.tips.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                        <CheckCircle className="w-5 h-5 text-buckeye-red flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Call a Pro Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Mascot */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block w-48 xl:w-56 flex-shrink-0"
            >
              <img
                src="/assets/mascot-pointing.png"
                alt="Buckeye Mascot Pointing"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-buckeye-red" />
                <h2 className="text-3xl md:text-4xl font-display font-bold">When to Call a Professional</h2>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                While DIY can handle small issues, some problems need expert attention. Call us immediately if you notice:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Water pooling around your water heater',
                  'Multiple slow or clogged drains',
                  'Low water pressure throughout the house',
                  'Sewage smells inside or outside',
                  'Visible pipe corrosion or leaks',
                  'No hot water or inconsistent temperature',
                  'Water stains on walls or ceilings',
                  'Gurgling sounds from drains',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <AlertTriangle className="w-5 h-5 text-buckeye-red flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:2394386662"
                  className="inline-flex items-center justify-center gap-3 bg-buckeye-red hover:bg-buckeye-red-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  (239) 438-6662
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:border-white hover:bg-white/10 transition-colors"
                >
                  Schedule Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Estimate CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Need Help With Your Plumbing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We offer FREE estimates and are available 24/7 for emergencies. Licensed & insured with 25 years of experience.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-buckeye-red text-white rounded-full font-bold text-lg hover:bg-buckeye-red-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Your Free Estimate
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
