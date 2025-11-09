
import React from 'react';
import AnimatedSection from './AnimatedSection';

const castMembers = [
  {
    name: 'Prabhas',
    character: 'The Rajasaab',
    imgSrc: 'https://picsum.photos/400/500?random=1',
  },
  {
    name: 'Nidhi Agerwal',
    character: 'Lead Actress',
    imgSrc: 'https://picsum.photos/400/500?random=2',
  },
  {
    name: 'Riddhi Kumar',
    character: 'Supporting Role',
    imgSrc: 'https://picsum.photos/400/500?random=3',
  },
  {
    name: 'Sanjay Dutt',
    character: 'The Antagonist',
    imgSrc: 'https://picsum.photos/400/500?random=4',
  },
];

interface CastCardProps {
  name: string;
  character: string;
  imgSrc: string;
}

const CastCard: React.FC<CastCardProps> = ({ name, character, imgSrc }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img src={imgSrc} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
      <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
      <p className="text-sm text-gray-300">{character}</p>
    </div>
  </div>
);

const Cast: React.FC = () => {
  return (
    <section id="cast" className="py-20 md:py-32 bg-black/50">
      <AnimatedSection>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-gold text-center mb-12">
            Cast & Crew
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {castMembers.map((member, index) => (
              <CastCard key={index} {...member} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Cast;
