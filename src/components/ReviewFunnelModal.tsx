import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, X } from 'lucide-react';

interface ReviewFunnelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewFunnelModal({ isOpen, onClose }: ReviewFunnelModalProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle modal close and reset state
  const handleClose = () => {
    onClose();
    // Reset state after animation completes
    setTimeout(() => {
      setRating(0);
      setHoverRating(0);
      setFeedback('');
      setIsSubmitted(false);
    }, 300);
  };

  const handleGoogleRedirect = () => {
    window.open('https://www.google.com/search?sca_esv=4ae20d8bd47daad1&sxsrf=ANbL-n4JJy3G-QXhHSIIMJJ3Gv1guhKyUg:1773760082898&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOT7Pej6CkjhTwkfx-hdvPZ_C76cNCjy4-BETKeFPBDayCMRgbWf73MlXCuEQ3x-wBq-EYNKtrMyfUW8Clf8oBfp44FWOng10v9kBiLyZeCcCJdaI9AyCLQQahFB2pNjP25btgS0%3D&q=Buckeye+Plumbing+Of+Southwest+Florida+Inc+Reviews&sa=X&ved=2ahUKEwjbpaGdm6eTAxUuSjABHVMUAvQQ0bkNegQIHxAF&biw=1920&bih=934&dpr=1#', '_blank'); 
    handleClose();
  };

  const handleFeedbackSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API submission for feedback
    console.log('Feedback submitted to owner:', { rating, feedback });
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden z-10 p-6 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div className="text-center">
                <h3 className="text-2xl font-display font-bold text-white mb-2">How did we do?</h3>
                <p className="text-gray-400 mb-6">Please rate your experience with Buckeye Plumbing.</p>

                {/* Star Selection */}
                <div className="flex justify-center gap-2 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 transition-transform hover:scale-110 focus:outline-none"
                    >
                      <Star
                        className={`w-10 h-10 ${
                          (hoverRating || rating) >= star
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-600'
                        } transition-colors duration-200`}
                      />
                    </button>
                  ))}
                </div>

                {/* Conditional UI based on rating */}
                <AnimatePresence mode="wait">
                  {rating > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      {rating >= 4 ? (
                        <div className="space-y-4 pb-2">
                          <p className="text-emerald-400 font-medium">We're so glad you had a great experience!</p>
                          <p className="text-sm text-gray-300">Your feedback helps others find reliable plumbers. Would you mind sharing your review on Google?</p>
                          <button
                            onClick={handleGoogleRedirect}
                            className="w-full py-3.5 px-4 bg-buckeye-red hover:bg-buckeye-red-dark text-white rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-buckeye-red/20"
                          >
                            <Star className="w-5 h-5 fill-current" />
                            Submit
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleFeedbackSubmit} className="space-y-4 text-left pb-2">
                          <p className="text-gray-300 font-medium mb-1">Thank you very much. Would you like to leave some feedback to the owner?</p>
                          <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="Tell us how we can improve..."
                            className="w-full h-32 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-buckeye-red focus:border-transparent resize-none"
                            required
                          />
                          <button
                            type="submit"
                            className="w-full py-3.5 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-95"
                          >
                            Submit Feedback
                          </button>
                        </form>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-emerald-400 fill-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-400">Your feedback has been sent directly to our team. We appreciate you taking the time to help us improve.</p>
                <button
                  onClick={handleClose}
                  className="mt-8 px-8 py-2.5 bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-gray-600 text-white rounded-full font-medium transition-colors"
                >
                  Close
                </button>
              </motion.div>
            )}
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
