
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Synopsis from './components/Synopsis';
import Cast from './components/Cast';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import PhotoFrame from './components/PhotoFrame';
import PreReleaseEvent from './components/PreReleaseEvent';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-brand-light font-sans">
      <Header />
      <main>
        <Hero />
        <Synopsis />
        <Cast />
        <Gallery />
        <PhotoFrame />
        <PreReleaseEvent />
      </main>
      <Footer />
    </div>
  );
};

export default App;