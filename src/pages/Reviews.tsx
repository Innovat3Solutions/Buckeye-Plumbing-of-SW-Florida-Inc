import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, MessageSquare } from 'lucide-react';

export default function Reviews() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  // Example placeholder reviews for SEO E-E-A-T
  const existingReviews = [
    { name: "John D.", city: "Naples", text: "Buckeye Plumbing came out at 2 AM for a burst pipe. Absolute lifesavers. Very professional and the price was fair.", stars: 5 },
    { name: "Sarah W.", city: "Fort Myers", text: "Had them repipe my entire 1970s home. The crew was respectful, clean, and finished right on schedule.", stars: 5 },
    { name: "Mike T.", city: "Cape Coral", text: "Fast water heater replacement. They brought the new unit and hauled the old one away.", stars: 4 },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Customer Reviews & Testimonials | Buckeye Plumbing</title>
        <meta name="description" content="Read real reviews from our satisfied plumbing customers across Southwest Florida. We pride ourselves on 5-star service for every emergency or installation." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 text-center text-balance overflow-hidden relative">
         <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/service-images/hero-van.png"
            alt="Buckeye Plumbing reviews"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl text-gray-300">Don't just take our word for it. See what your neighbors in Southwest Florida have to say about our service.</p>
        </div>
      </section>

      {/* Leave a Review CTA (Integrated Funnel UI) */}
      <section className="py-16 bg-gray-50 border-b border-gray-200 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <MessageSquare className="w-12 h-12 text-buckeye-red mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">How did we do?</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
            Your feedback helps us maintain our high standards. Please click a star below to rate your recent plumbing service.
          </p>
          
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(star)}
                className="focus:outline-none transition-transform hover:scale-110"
              >
                <Star
                  className={`w-12 h-12 stroke-1 transition-colors ${
                    (hoveredRating || rating) >= star
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-transparent text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>

          {rating > 0 && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {rating >= 4 ? (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-md mx-auto">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">We're so glad you're happy!</h3>
                  <p className="text-gray-600 text-sm mb-6">Would you mind sharing your 5-star experience on Google so others can find us?</p>
                  <a
                    href="https://www.google.com/search?q=Buckeye+Plumbing+Of+Southwest+Florida+Inc+Reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                  >
                    Post Review to Google
                  </a>
                </div>
              ) : (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-md mx-auto text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How can we improve?</h3>
                  <p className="text-gray-600 text-sm mb-4">We're sorry we didn't meet your expectations. Please let ownership know what happened.</p>
                  <textarea 
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm min-h-[100px] mb-4 focus:outline-none focus:ring-2 focus:ring-buckeye-red"
                    placeholder="Tell us what went wrong..."
                  />
                  <button className="w-full bg-buckeye-red hover:bg-buckeye-red-dark text-white px-6 py-3 rounded-lg font-bold transition">
                    Send Direct to Owner
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* SEO Reviews Feed */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">Recent Customer Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {existingReviews.map((review, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{review.name}</h4>
                <p className="text-sm text-gray-500 font-medium mb-4">{review.city}, FL</p>
                <p className="text-gray-600 italic leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
