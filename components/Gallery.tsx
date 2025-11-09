
import React from 'react';
import AnimatedSection from './AnimatedSection';

const galleryImages = [
  'https://i.imgur.com/mR3e73h.jpeg',
  'https://i.imgur.com/G5550V0.jpeg',
  'https://i.imgur.com/d7y02g0.jpeg',
  'https://i.imgur.com/J3tG3sO.jpeg',
  'https://i.imgur.com/Y171yM7.jpeg',
  'https://i.imgur.com/13k5c3Q.jpeg',
];


const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-brand-dark">
      <AnimatedSection>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-gold text-center mb-12">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="group overflow-hidden rounded-lg cursor-pointer">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Gallery;