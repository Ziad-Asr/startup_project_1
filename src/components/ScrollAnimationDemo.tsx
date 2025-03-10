import React from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function ScrollAnimationDemo() {
  return (
    <div className="min-h-[300vh] bg-dark-950 pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-12">Scroll Down to See Animations</h1>
        
        <div className="h-[80vh]" />
        
        <ScrollAnimation>
          <div className="glossy-card bg-dark-850 p-8 rounded-lg mb-24">
            <h2 className="text-2xl font-bold text-white mb-4">First Section</h2>
            <p className="text-gray-300">
              This section only animates when you scroll down. Try scrolling up and down
              to see how it behaves.
            </p>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="glossy-card bg-dark-850 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  Card {item}
                </h3>
                <p className="text-gray-300">
                  Each group of cards animates together when scrolling down.
                  The animation resets when you scroll back to the top.
                </p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation>
          <div className="glossy-card bg-dark-850 p-8 rounded-lg mb-24">
            <h2 className="text-2xl font-bold text-white mb-4">
              Final Section
            </h2>
            <p className="text-gray-300">
              Scroll back to the top and then down again to see all animations reset
              and replay. The animations only trigger on downward scrolling.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}