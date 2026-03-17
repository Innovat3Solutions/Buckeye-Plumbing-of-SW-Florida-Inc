import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Tips from './pages/Tips';
import Contact from './pages/Contact';

// Dynamic SEO Pages
import ServiceAreaTemplate from './pages/templates/ServiceAreaTemplate';
import ServiceDetailTemplate from './pages/templates/ServiceDetailTemplate';
import TipDetailTemplate from './pages/templates/TipDetailTemplate';
import Reviews from './pages/Reviews';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Dynamic SEO Routes */}
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/service-areas/:cityId" element={<ServiceAreaTemplate />} />
            <Route path="/services/emergency/:serviceId" element={<ServiceDetailTemplate isEmergency={true} />} />
            <Route path="/services/:serviceId" element={<ServiceDetailTemplate isEmergency={false} />} />
            <Route path="/tips/:tipId" element={<TipDetailTemplate />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
