import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

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
      <div className="bg-green-50 p-8 rounded-2xl text-center border border-green-200">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">We've received your request and will call you back shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold font-display text-gray-900 mb-6">Request Service</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-buckeye-red focus:border-transparent outline-none transition-all"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-buckeye-red focus:border-transparent outline-none transition-all"
            placeholder="(239) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-buckeye-red focus:border-transparent outline-none transition-all"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-buckeye-red focus:border-transparent outline-none transition-all bg-white"
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
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Best Time to Call</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-buckeye-red focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Anytime</option>
            <option value="Morning">Morning (8am - 12pm)</option>
            <option value="Afternoon">Afternoon (12pm - 5pm)</option>
            <option value="Evening">Evening (5pm - 8pm)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-buckeye-red focus:border-transparent outline-none transition-all resize-none"
          placeholder="Describe your plumbing issue..."
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-buckeye-red text-white font-bold py-4 rounded-lg shadow-md hover:bg-red-700 transition-colors flex items-center justify-center gap-2 text-lg uppercase tracking-wide"
      >
        Submit & We'll Call You Back <Send className="w-5 h-5" />
      </motion.button>
      
      <p className="text-xs text-center text-gray-500 mt-4">
        By submitting this form, you agree to be contacted by Buckeye Plumbing regarding your service request.
      </p>
    </form>
  );
}
