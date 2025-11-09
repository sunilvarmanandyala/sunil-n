
import React from 'react';

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
);


const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
       <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        poster="https://i.imgur.com/G5550V0.jpeg"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-fire-burning-on-a-black-background-39535-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 px-4 text-white">
        <h2 className="text-2xl md:text-4xl font-light tracking-widest animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          HE IS ARRIVING ON
        </h2>
        <h3 className="text-6xl md:text-8xl font-bold text-brand-gold my-4 font-serif animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          23RD OCT
        </h3>
        <p className="text-xl md:text-3xl font-serif my-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            THE <span className="text-brand-gold">RAJASAAB</span>
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
          <button className="bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <PlayIcon />
            WATCH TRAILER
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
