import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Wrench, Phone, CheckCircle, AlertTriangle, AlertCircle, RefreshCw, HelpCircle, ChevronRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

import { DETAILED_SERVICES, EMERGENCY_SERVICES } from '../../data/SEODataStore';

interface Props {
  isEmergency?: boolean;
}

export default function ServiceDetailTemplate({ isEmergency = false }: Props) {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Choose the correct data store based on the route type
  const dataStore = isEmergency ? EMERGENCY_SERVICES : DETAILED_SERVICES;
  const serviceData = dataStore.find(service => service.id === serviceId);

  // Fallback 
  if (!serviceData) {
    return (
      <div className="py-32 text-center bg-gray-50 min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-8 text-lg">The service you are looking for does not exist or has been moved.</p>
        <Link to="/services" className="bg-buckeye-red text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition">View All Services</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pb-20">
      <Helmet>
        <title>{serviceData.metaTitle}</title>
        <meta name="description" content={serviceData.metaDescription} />
      </Helmet>

      {/* Dynamic Hero Section */}
      <section className={`relative pt-24 pb-32 ${isEmergency ? 'bg-red-900' : 'bg-gray-900'} text-white overflow-visible`}>
        <div className="absolute inset-0 opacity-20">
          <img
            src={isEmergency ? "/assets/service-images/service-leak-repair.png" : "/assets/service-images/hero-van.png"}
            alt={serviceData.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left pt-12 lg:pt-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`inline-flex items-center gap-2 ${isEmergency ? 'bg-white text-red-900 shadow-xl' : 'bg-buckeye-red text-white'} px-5 py-2.5 rounded-full text-sm font-bold mb-8 uppercase tracking-wide`}
              >
                {isEmergency ? <AlertTriangle className="w-4 h-4" /> : <Wrench className="w-4 h-4" />}
                {isEmergency ? '24/7 Emergency Service' : 'Professional Plumbing'}
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 max-w-4xl mx-auto lg:mx-0 leading-tight drop-shadow-md"
              >
                {serviceData.heading}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed hidden md:block"
              >
                Expert {serviceData.name.toLowerCase()} solutions by licensed professionals. Guaranteed quality and upfront pricing.
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
                src={isEmergency ? "/assets/mascot-running.png" : "/assets/mascot-pointing.png"}
                alt="Buckeye Plumber Mascot"
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
                Professional {serviceData.name}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {serviceData.content}
              </p>
            </div>

            {/* What to Expect & Signs Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {serviceData.bullets && (
                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 h-full">
                  <h3 className="text-2xl font-bold font-display text-gray-900 mb-6 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-buckeye-red" />
                    What to Expect
                  </h3>
                  <ul className="space-y-4">
                    {serviceData.bullets.map((bullet: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="font-medium text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(serviceData as any).commonSigns && (
                <div className="bg-red-50 p-8 rounded-2xl shadow-md border border-red-100 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <AlertCircle className="w-32 h-32 text-red-900" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-gray-900 mb-6 flex items-center gap-3 relative z-10">
                    <AlertCircle className="w-6 h-6 text-buckeye-red" />
                    Warning Signs
                  </h3>
                  <ul className="space-y-4 relative z-10">
                    {(serviceData as any).commonSigns.map((sign: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-gray-800">
                        <div className="w-2 h-2 rounded-full bg-buckeye-red mt-2 flex-shrink-0 shadow-sm" />
                        <span className="font-medium">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Process Section */}
            {(serviceData as any).processSteps && (
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-gray-100 relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gray-100 p-2.5 rounded-xl">
                    <RefreshCw className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-3xl font-bold font-display text-gray-900">Our Proven Process</h3>
                </div>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                  {(serviceData as any).processSteps.map((step: any, i: number) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-900 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                        {i + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-gray-200">
                        <h4 className="font-bold text-xl text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs Section */}
            {(serviceData as any).faqs && (
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 p-2.5 rounded-xl">
                      <HelpCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold font-display text-gray-900">Common Questions</h3>
                  </div>
                  <div className="hidden md:block w-16 h-16 opacity-50">
                    <img src="/assets/mascot-thinking.png" alt="Thinking Mascot" className="w-full h-full object-contain" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {(serviceData as any).faqs.map((faq: any, i: number) => (
                    <div key={i} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:bg-white transition-colors duration-300">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-buckeye-red flex-shrink-0 mt-0.5" />
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base pl-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
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
                  <h3 className="text-2xl font-display font-bold mb-3">Need {serviceData.name} Now?</h3>
                  <p className="text-gray-300 text-sm mb-6">Our licensed professionals are standing by to dispatch to your location immediately.</p>
                  
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

              {/* Guarantees Card */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">The Buckeye Guarantee</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-4 h-4 text-buckeye-red" />
                    </div>
                    Licensed & Insured (CFC1429403)
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-4 h-4 text-buckeye-red" />
                    </div>
                    Upfront, Transparent Pricing
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-4 h-4 text-buckeye-red" />
                    </div>
                    100% Satisfaction Guarantee
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-4 h-4 text-buckeye-red" />
                    </div>
                    Drug-Tested Background-Checked
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

