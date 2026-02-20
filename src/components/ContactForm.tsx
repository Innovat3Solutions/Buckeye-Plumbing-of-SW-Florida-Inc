import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, Phone } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    time: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 p-6 md:p-8 rounded-2xl text-center border border-green-200">
        <CheckCircle className="w-14 md:w-16 h-14 md:h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 text-sm md:text-base">We've received your request and will call you back shortly.</p>
        <a
          href="tel:2394386662"
          className="inline-flex items-center justify-center gap-2 mt-6 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Us Now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-white p-5 md:p-8 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="text-xl md:text-2xl font-bold font-display text-gray-900 mb-4 md:mb-6">Request Service</h3>

      {/* Name & Phone - Stack on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-buckeye-red focus:border-transparent outline-none transition-all text-base"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-buckeye-red focus:border-transparent outline-none transition-all text-base"
            placeholder="(239) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-buckeye-red focus:border-transparent outline-none transition-all text-base"
          placeholder="you@example.com"
        />
      </div>

      {/* Service & Time - Stack on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">Service Needed *</label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-buckeye-red focus:border-transparent outline-none transition-all bg-white text-base appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
          >
            <option value="">Select a Service</option>
            <option value="Emergency">Emergency Service</option>
            <option value="Leak Repair">Leak Repair</option>
            <option value="Water Heater">Water Heater</option>
            <option value="Drain Cleaning">Drain Cleaning</option>
            <option value="Repiping">Repiping</option>
            <option value="Commercial">Commercial Plumbing</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1.5">Best Time to Call</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-buckeye-red focus:border-transparent outline-none transition-all bg-white text-base appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
          >
            <option value="">Anytime</option>
            <option value="Morning">Morning (8am - 12pm)</option>
            <option value="Afternoon">Afternoon (12pm - 5pm)</option>
            <option value="Evening">Evening (5pm - 8pm)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message (Optional)</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-buckeye-red focus:border-transparent outline-none transition-all resize-none text-base"
          placeholder="Describe your plumbing issue..."
        />
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-buckeye-red text-white font-bold py-4 md:py-4 rounded-xl shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 text-base md:text-lg uppercase tracking-wide active:bg-red-800"
      >
        Submit Request <Send className="w-5 h-5" />
      </motion.button>

      <p className="text-xs text-center text-gray-500">
        By submitting, you agree to be contacted by Buckeye Plumbing regarding your service request.
      </p>
    </form>
  );
}
