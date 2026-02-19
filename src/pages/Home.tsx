import Hero from '../components/Hero';
import Features from '../components/Features';
import ServicesPreview from '../components/ServicesPreview';
import Testimonials from '../components/Testimonials';
import ServiceAreaMap from '../components/ServiceAreaMap';
import { Phone } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesPreview />
      
      {/* CTA Strip */}
      <section className="bg-buckeye-red text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">Need a Plumber Now?</h2>
            <p className="text-lg opacity-90">Our expert technicians are standing by 24/7.</p>
          </div>
          <a
            href="tel:2394386662"
            className="flex items-center gap-2 bg-white text-buckeye-red px-8 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Phone className="fill-current" /> (239) 438-6662
          </a>
        </div>
      </section>

      <Testimonials />
      <ServiceAreaMap />
    </>
  );
}
