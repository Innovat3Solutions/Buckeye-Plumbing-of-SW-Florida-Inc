import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: 'Naples, FL',
    text: 'Responsive, clean, professional — they fixed it the same day! The technician was polite and explained everything clearly.',
    rating: 5,
  },
  {
    name: 'Mike Thompson',
    location: 'Bonita Springs, FL',
    text: 'Buckeye Plumbing saved us during a holiday weekend emergency. Fast response and fair pricing. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Linda Rodriguez',
    location: 'Estero, FL',
    text: 'Finally a plumber I can trust. They did a full repipe of our home and the process was smooth from start to finish.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-buckeye-gray text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-buckeye-red rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-24 h-24 md:w-32 md:h-32 mb-4">
             <img 
                src="/assets/mascot-thumbs-up.png" 
                alt="Buckeye Plumber Thumbs Up" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 pt-8">
            What Our <span className="text-buckeye-red">Customers</span> Say
          </h2>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Rated 5 Stars on Google & Angi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-600 opacity-20" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-buckeye-red rounded-full flex items-center justify-center font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
