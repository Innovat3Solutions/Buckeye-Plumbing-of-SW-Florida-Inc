import Hero from '../components/Hero';
import Features from '../components/Features';
import ServicesPreview from '../components/ServicesPreview';
import Testimonials from '../components/Testimonials';
import ServiceAreaMap from '../components/ServiceAreaMap';
import EmergencyBanner from '../components/EmergencyBanner';
import { Phone } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesPreview />

      {/* CTA Strip with Mascot */}
      <section className="bg-buckeye-red text-white py-6 md:py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Mascot - Left side, positioned to show face */}
            <div className="hidden md:block w-28 lg:w-36 flex-shrink-0 -mb-6 md:-mb-8">
              <img
                src="/assets/mascot-phone.png"
                alt="Buckeye Plumber on Phone"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-2">Need a Plumber Now?</h2>
              <p className="text-base md:text-lg opacity-90">Our expert technicians are standing by 24/7.</p>
            </div>

            {/* CTA Button */}
            <a
              href="tel:2394386662"
              className="flex items-center gap-2 bg-white text-buckeye-red px-8 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg flex-shrink-0"
            >
              <Phone className="fill-current" /> (239) 438-6662
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      <EmergencyBanner />
      <ServiceAreaMap />
    </>
  );
}
