
import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Synopsis', href: '#synopsis' },
  { name: 'Cast', href: '#cast' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Fan Zone', href: '#fanzone' },
  { name: 'Event', href: '#event' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold tracking-widest">
          RAJASAAB
        </h1>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-brand-gold transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a href="#event" className="bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
            EVENT INFO
          </a>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button could go here */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;