import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect, useCallback, useRef } from 'react';

const testimonials = [
  {
    name: 'Jill Backman',
    location: 'Google Review',
    text: 'Reliable and good work. I had a pipe leak from our ceiling. Buckeye was responsive, and came and fixed the pipe quickly. Very pleased and will use them again. Consistently reliable and they stand behind their work.',
    rating: 5,
    isLocalGuide: true,
  },
  {
    name: 'Jim Hilton',
    location: 'Google Review',
    text: 'Just wanted to say thanks to the team at Buckeye plumbing. It was a pleasure to work with them to resolve an emergency situation. They were courteous, professional and kept me informed all along the way. Highly recommend their services.',
    rating: 5,
    isLocalGuide: false,
  },
  {
    name: 'Hock Leong',
    location: 'Google Review',
    text: 'They replaced my leaking water heater about 4 years ago and did a great job. A couple days ago, it started leaking again. They came this Saturday and diagnosed the problem and replaced the relief valve in no time. Another great job!',
    rating: 5,
    isLocalGuide: false,
  },
  {
    name: 'Nick J Fertitta',
    location: 'Google Review',
    text: 'They arrived at the time stated. Neat, clean and professional. Got the job done quick at a reasonable cost. I would hire again and strongly recommend them.',
    rating: 5,
    isLocalGuide: false,
  },
  {
    name: 'Patricia Pensabene',
    location: 'Google Review',
    text: 'I highly recommend Buckeye Plumbing for any plumbing job. This is the second time I have used them for a large job and most recently, a new water heater. David responds quickly and has the job scheduled and completed asap. Great service!',
    rating: 5,
    isLocalGuide: false,
  },
  {
    name: 'Jason Heldenbrand',
    location: 'Google Review',
    text: 'David and his team did a great job installing a whole house water filter and repairing some kitchen plumbing. I will use them again and would not hesitate to recommend them. Thanks for the great work.',
    rating: 5,
    isLocalGuide: true,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);

  // Number of visible cards based on screen size
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused && !isTouching) {
      autoPlayRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, isTouching, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    // Resume auto-play after a brief delay
    setTimeout(() => setIsTouching(false), 3000);
  };

  return (
    <section className="py-20 bg-buckeye-gray text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img
          src="/assets/service-images/hero-van.png"
          alt="Plumbing Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-buckeye-red rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Mascot */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10 md:mb-16">
          {/* Mobile Mascot - Above heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:hidden w-20 flex-shrink-0"
          >
            <img
              src="/assets/mascot-thumbs-up.png"
              alt="Buckeye Plumber Thumbs Up"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4">
              What Our <span className="text-buckeye-red">Customers</span> Say
            </h2>
            <div className="flex justify-center gap-1 mb-3 md:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
              Rated 5 Stars on Google & Angi
            </p>
          </motion.div>

          {/* Desktop Mascot - Thumbs Up */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block w-36 xl:w-44 flex-shrink-0"
          >
            <img
              src="/assets/mascot-thumbs-up.png"
              alt="Buckeye Plumber Thumbs Up"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-buckeye-red rounded-full items-center justify-center transition-colors backdrop-blur-sm border border-white/20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-buckeye-red rounded-full items-center justify-center transition-colors backdrop-blur-sm border border-white/20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Carousel Track */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / visibleCount + (visibleCount > 1 ? 2 : 0))}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 24 / visibleCount}px)` }}
                >
                  <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/10 relative group hover:bg-gray-800 transition-colors duration-300 flex flex-col h-full">
                    <Quote className="absolute top-4 right-4 w-10 h-10 text-buckeye-red/10 group-hover:text-buckeye-red/20 transition-colors" />

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-300 italic mb-6 leading-relaxed text-base font-light flex-grow">"{testimonial.text}"</p>

                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 bg-gradient-to-br from-buckeye-red to-buckeye-red-dark rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg flex-shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                          {testimonial.isLocalGuide && (
                            <span className="bg-blue-500/10 text-blue-400 text-[9px] px-1.5 py-0.5 rounded border border-blue-500/20 font-medium uppercase tracking-wider">
                              Local Guide
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5 flex items-center gap-1">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                          Google Review
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-buckeye-red w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Pause indicator on mobile */}
          {isTouching && (
            <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full md:hidden">
              Paused
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
