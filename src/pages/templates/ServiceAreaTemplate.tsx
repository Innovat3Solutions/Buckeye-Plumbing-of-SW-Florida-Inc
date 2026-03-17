import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICE_AREAS } from '../../data/SEODataStore';

export default function ServiceAreaTemplate() {
  const { cityId } = useParams<{ cityId: string }>();
  
  // Find the content for this specific city
  const areaData = SERVICE_AREAS.find(area => area.id === cityId);

  if (!areaData) {
    return (
      <div className="py-32 text-center bg-gray-50 min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Location Not Found</h1>
        <p className="text-gray-600 mb-8 text-lg">We couldn't find the service area you're looking for.</p>
        <Link to="/" className="bg-buckeye-red text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pb-20">
      <Helmet>
        <title>{areaData.metaTitle}</title>
        <meta name="description" content={areaData.metaDescription} />
      </Helmet>

      {/* Dynamic Hero Section */}
      <section className="relative pt-24 pb-32 bg-gray-900 text-white overflow-visible">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/service-images/hero-van.png"
            alt={`Plumbing services in ${areaData.name}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left pt-12 lg:pt-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-buckeye-red text-white px-5 py-2.5 rounded-full text-sm font-bold mb-8 uppercase tracking-wide"
              >
                <MapPin className="w-4 h-4" />
                Local Plumber in {areaData.name}
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 max-w-4xl mx-auto lg:mx-0 leading-tight drop-shadow-md"
              >
                {areaData.heading}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed hidden md:block"
              >
                Fast, reliable, and licensed plumbing services available 24/7 in {areaData.name}. Upfront pricing and 100% satisfaction guaranteed.
              </motion.p>
            </div>

            {/* Mascot Image - Overlapping the bottom of the hero slightly */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-48 xl:w-64 flex-shrink-0 hidden lg:block -mb-40 relative z-20"
            >
              <img
                src="/assets/mascot-waving.png"
                alt="Buckeye Plumber Mascot Waving"
                className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transform scale-110"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Slanted Bottom Edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 text-gray-50">
          <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120H0V0l1200 120z" className="fill-current"></path>
          </svg>
        </div>
      </section>

      {/* Main Layout - 2 Columns */}
      <section className="-mt-12 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Intro Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-buckeye-red rounded-full block"></span>
                Why Choose Us in {areaData.name}?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {areaData.content}
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold font-display text-gray-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-buckeye-red" />
                The Buckeye Advantage
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Licensed & Insured #CFC1429403', 
                  '24/7 Emergency Service', 
                  'Upfront pricing, no hidden fees', 
                  '100% Satisfaction Guarantee',
                  'Drug-Tested & Background-Checked',
                  'Same-Day Service Available'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Sticky Sidebar (Right Column) */}
          <div className="lg:col-span-4 lg:mt-0 mt-8">
            <div className="sticky top-28 space-y-8">
              
              {/* Primary Dispatch CTA */}
              <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden relative text-white border-2 border-transparent hover:border-buckeye-red/50 transition-colors">
                <div className="p-8 text-center relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 bg-white/10 rounded-full p-4 flex items-center justify-center">
                    <img src="/assets/mascot-phone.png" alt="Call Buckeye Plumbing" className="w-full h-full object-contain transform scale-125" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">Plumbing Emergency?</h3>
                  <p className="text-gray-300 text-sm mb-6">Our licensed professionals in {areaData.name} are standing by to dispatch to your location immediately.</p>
                  
                  <a
                    href="tel:2394386662"
                    className="flex items-center justify-center gap-2 bg-buckeye-red hover:bg-red-700 text-white px-6 py-4 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-red-900/50 group"
                  >
                    <Phone className="w-5 h-5 fill-current group-hover:animate-bounce" />
                    (239) 438-6662
                  </a>
                  <p className="text-gray-400 text-xs mt-4 uppercase tracking-wider font-semibold">Available 24/7/365</p>
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              </div>
              
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
