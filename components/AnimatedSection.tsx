import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  // Fix: Removed `triggerOnce: true` as it's not a valid property for `IntersectionObserverInit`.
  // The custom hook `useIntersectionObserver` already handles unobserving the element once it's visible,
  // effectively making it trigger only once.
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      <div className={`${isVisible ? 'animate-fade-in-up' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;
