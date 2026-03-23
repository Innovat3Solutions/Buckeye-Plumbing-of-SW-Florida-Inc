import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load GHL form script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    script.onload = () => {
      // Small delay to ensure script has initialized
      setTimeout(() => setIsLoading(false), 800);
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-h-[745px] group">
      {/* Premium Red Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-buckeye-red via-buckeye-red-light to-buckeye-red z-20" />

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md z-30">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-100 border-t-buckeye-red rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-buckeye-red/10 rounded-full animate-pulse" />
            </div>
          </div>
          <p className="mt-6 text-gray-900 font-display font-bold uppercase tracking-widest text-sm">
            Initializing Secure Form
          </p>
          <p className="text-gray-500 text-xs mt-1">Connecting to Buckeye Plumbing...</p>
        </div>
      )}

      {/* GHL Form Iframe */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-full relative z-10"
      >
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/xmiSHQKWKcmfHz6l47FM"
          style={{ width: '100%', height: '745px', border: 'none' }}
          id="inline-xmiSHQKWKcmfHz6l47FM"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="buckeye-plumbing-contact-form"
          data-height="745"
          data-layout-iframe-id="inline-xmiSHQKWKcmfHz6l47FM"
          data-form-id="xmiSHQKWKcmfHz6l47FM"
          title="buckeye-plumbing-contact-form"
        ></iframe>

        <div>
          <ui>
             <li className="text-gray-400 text-sm text-center pb-5">
                <Link to="/privacy-policy" className="hover:text-[#E31E24] transition-colors">Privacy Policy</Link> | <Link to="/terms-and-conditions" className="hover:text-[#E31E24] transition-colors">Terms and Conditions</Link>
              </li>
          </ui>
        </div>
      </motion.div>
    </div>
  );
}
