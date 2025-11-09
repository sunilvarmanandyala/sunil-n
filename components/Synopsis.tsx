
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Synopsis: React.FC = () => {
  return (
    <section id="synopsis" className="py-20 md:py-32 bg-brand-dark">
      <AnimatedSection>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <img
                src="https://i.imgur.com/G5550V0.jpeg"
                alt="The Rajasaab Poster"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-6">
                The Story
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                In a world cloaked in shadows, one man walks the fine line between justice and vengeance. "The Rajasaab" is a thrilling saga of power, betrayal, and redemption. When a formidable figure from the past returns to reclaim his lost empire, he must confront new enemies and old demons alike.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With style, swagger, and an unyielding will, he carves a path through a labyrinth of conspiracy, proving that true royalty is not inherited—it is earned.
              </p>
              <div className="mt-8">
                  <p className="text-brand-gold text-lg"><strong>Release Date:</strong> 10.4.2025</p>
                  <p className="text-brand-gold text-lg"><strong>Director:</strong> A Maruthi Film</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Synopsis;
