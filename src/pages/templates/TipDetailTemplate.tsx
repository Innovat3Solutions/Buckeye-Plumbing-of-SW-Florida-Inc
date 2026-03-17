import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Info, ArrowLeft, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { TIPS_AND_ARTICLES } from '../../data/SEODataStore';

export default function TipDetailTemplate() {
  const { tipId } = useParams<{ tipId: string }>();
  
  const tipData = TIPS_AND_ARTICLES.find(tip => tip.id === tipId);

  if (!tipData) {
    return (
      <div className="py-32 text-center bg-gray-50 min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8 text-lg">We couldn't find the plumbing tip you're looking for.</p>
        <Link to="/tips" className="bg-buckeye-red text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition">Return to Tips</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pb-20">
      <Helmet>
        <title>{tipData.metaTitle}</title>
        <meta name="description" content={tipData.metaDescription} />
      </Helmet>

      {/* Header Section */}
      <section className="relative pt-16 pb-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/tips" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Tips Hub
          </Link>
          <div>
            <div className="inline-flex items-center gap-2 bg-buckeye-red/20 text-buckeye-red px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider backdrop-blur-sm">
              <Info className="w-4 h-4" />
              Plumbing Advice
            </div>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight drop-shadow-md"
          >
            {tipData.heading}
          </motion.h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="-mt-12 relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-14">
          <div className="prose prose-lg prose-red max-w-none">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-10 first-letter:text-6xl first-letter:font-display first-letter:font-bold first-letter:text-buckeye-red first-letter:mr-2">
              {tipData.content}
            </p>

            {tipData.bullets && tipData.bullets.length > 0 && (
              <div className="mt-16 pt-12 border-t border-gray-200 relative">
                
                {/* Playful Mascot Integration */}
                <div className="absolute -top-[72px] right-0 md:-right-6 w-24 md:w-32 opacity-100">
                  <img src="/assets/mascot-thinking.png" alt="Thinking Mascot" className="w-full h-auto drop-shadow-xl" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-display text-gray-900 mb-8 flex items-center gap-3">
                  <div className="bg-yellow-100 p-2.5 rounded-xl shadow-sm">
                    <Lightbulb className="w-7 h-7 text-yellow-600" />
                  </div>
                  Key Takeaways
                </h3>
                
                <div className="grid gap-4">
                  {tipData.bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-4 bg-gray-50 p-5 md:p-6 rounded-xl border border-gray-100 hover:border-buckeye-red/30 hover:shadow-md transition-all">
                      <div className="w-8 h-8 rounded-full bg-red-100 text-buckeye-red font-bold flex items-center justify-center flex-shrink-0 font-display shadow-sm">
                        {i + 1}
                      </div>
                      <span className="text-lg text-gray-700 leading-relaxed pt-0.5">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
