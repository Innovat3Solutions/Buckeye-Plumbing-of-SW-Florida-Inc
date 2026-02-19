import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Need Help Now? <span className="text-buckeye-red">Let’s Talk.</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            24/7 Emergency Service Available. Call us or fill out the form below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6 relative">
            {/* Mascot on Phone Decoration */}
            <div className="hidden lg:block absolute -top-32 -left-10 w-40 z-10 pointer-events-none">
              <img 
                src="/assets/mascot-phone.png" 
                alt="Buckeye Plumber on Phone" 
                className="w-full h-auto object-contain drop-shadow-xl transform -rotate-6"
              />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full relative z-0">
              <h3 className="text-2xl font-bold font-display text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-buckeye-red" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Phone</p>
                    <a href="tel:2394386662" className="text-gray-600 hover:text-buckeye-red transition-colors text-lg font-medium">
                      (239) 438-6662
                    </a>
                    <p className="text-xs text-gray-400 mt-1">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-buckeye-red" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <a href="mailto:service@buckeyeplumbingswfl.com" className="text-gray-600 hover:text-buckeye-red transition-colors">
                      service@buckeyeplumbingswfl.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-buckeye-red" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Office Location</p>
                    <p className="text-gray-600">
                      123 Plumbing Way<br />
                      Naples, FL 34102
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-buckeye-red" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Hours</p>
                    <p className="text-gray-600">
                      Monday - Sunday: Open 24 Hours<br />
                      Emergency Service Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-12 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113845.56475662768!2d-81.87232934179688!3d26.142035799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dae19b73c2d7ad%3A0x673f5f18e510c94c!2sNaples%2C%20FL!5e0!3m2!1sen!2sus!4v1684428956789!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '1rem' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Area Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
