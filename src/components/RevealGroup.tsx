import React, { ReactNode } from 'react';
import RevealOnScroll from './RevealOnScroll';

interface RevealGroupProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export default function RevealGroup({ children, className = '', staggerDelay = 200 }: RevealGroupProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <RevealOnScroll delay={index * staggerDelay} key={index}>
          {child}
        </RevealOnScroll>
      ))}
    </div>
  );
}