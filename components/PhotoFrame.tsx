
import React from 'react';
import AnimatedSection from './AnimatedSection';

const PhotoFrame: React.FC = () => {
  return (
    <section id="fanzone" className="py-20 md:py-32 bg-black/50">
      <AnimatedSection>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-gold text-center mb-4">
            Become Part of The Legend
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Create your own personalized Rajasaab poster! Upload your photo to place it within our exclusive frame, then download and share your new look with friends and family.
          </p>

          <div className="max-w-sm mx-auto bg-brand-dark p-2 rounded-xl shadow-2xl border border-brand-gold/20">
             <iframe
                src="https://nasaa-rajasaab-frames.netlify.app/"
                title="Rajasaab Photo Frame Generator"
                className="w-full h-auto aspect-[9/16] rounded-lg"
                frameBorder="0"
                loading="lazy"
                allow="camera"
             ></iframe>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default PhotoFrame;