import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Clock, Users } from 'lucide-react';

const team = [
  {
    name: 'John Buckeye',
    role: 'Founder & Master Plumber',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Sarah Smith',
    role: 'Office Manager',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Technician',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
            alt="Plumbing Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Our Mission & Story
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Deliver professional plumbing solutions with Buckeye regional pride and service excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Family-Owned, <span className="text-buckeye-red">Community Focused</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Buckeye Plumbing of SW Florida, Inc. was founded on a simple principle: treat every customer like a neighbor. Since 2015, we have been providing top-tier plumbing services to homeowners and businesses across Southwest Florida.
                </p>
                <p>
                  We are proud of our roots and bring that "Buckeye" spirit of hard work, honesty, and reliability to every job. Whether it's a 2 AM emergency or a scheduled renovation, our team is dedicated to getting the job done right the first time.
                </p>
                <p>
                  "Forget the Rest, We Are the Best" isn't just a slogan—it's our promise to you. We stand behind our work with a satisfaction guarantee and a commitment to excellence that is unmatched in the industry.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <ShieldCheck className="w-10 h-10 text-buckeye-red mb-3" />
                  <span className="font-bold text-gray-900">Licensed & Insured</span>
                  <span className="text-xs text-gray-500">CFC1429403</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <MapPin className="w-10 h-10 text-buckeye-red mb-3" />
                  <span className="font-bold text-gray-900">Local Company</span>
                  <span className="text-xs text-gray-500">SW Florida</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Clock className="w-10 h-10 text-buckeye-red mb-3" />
                  <span className="font-bold text-gray-900">24/7 Emergency</span>
                  <span className="text-xs text-gray-500">Always Ready</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-buckeye-red rounded-full opacity-10 z-0" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-200 rounded-full opacity-50 z-0" />
              <img 
                src="https://images.unsplash.com/photo-1581578731117-10d52143b0e8?q=80&w=2070&auto=format&fit=crop" 
                alt="Buckeye Plumbing Team" 
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The friendly faces behind our exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold font-display text-gray-900">{member.name}</h3>
                  <p className="text-buckeye-red font-medium mb-4">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
