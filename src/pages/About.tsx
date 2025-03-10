import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="text-4xl font-bold text-white mb-8">About EliteHoops</h1>
            </ScrollReveal>
            
            <div className="mb-12">
              <ScrollReveal delay={0.2}>
                <img
                  src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&w=1920&q=80"
                  alt="Our Story"
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />
              </ScrollReveal>
              
              <div className="prose prose-lg prose-invert">
                <ScrollReveal delay={0.3}>
                  <p className="text-gray-300 mb-6">
                    Since our founding in 1985, EliteHoops has been dedicated to crafting the world's finest basketballs. 
                    What began as a passionate pursuit of perfection in a small workshop in Springfield has evolved into 
                    a global leader in professional basketball manufacturing.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.4}>
                  <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-gray-300 mb-6">
                    We believe that every player deserves equipment that matches their dedication to the game. 
                    Our mission is to create basketballs that enhance performance, inspire confidence, and 
                    stand up to the demands of competitive play.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.5}>
                  <h2 className="text-2xl font-bold text-white mb-4">Innovation & Quality</h2>
                  <p className="text-gray-300 mb-6">
                    Every EliteHoops basketball represents decades of research, development, and player feedback. 
                    Our commitment to innovation drives us to continuously improve our products, incorporating the 
                    latest materials and manufacturing techniques.
                  </p>
                </ScrollReveal>
                
                <div className="grid md:grid-cols-3 gap-8 my-12">
                  <ScrollReveal direction="left" delay={0.6}>
                    <div className="glossy-card bg-dark-850 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#CC73F8] mb-2">35+ Years</h3>
                      <p className="text-gray-300">Of basketball manufacturing excellence</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.7}>
                    <div className="glossy-card bg-dark-850 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#CC73F8] mb-2">50+ Countries</h3>
                      <p className="text-gray-300">Global distribution network</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="right" delay={0.8}>
                    <div className="glossy-card bg-dark-850 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#CC73F8] mb-2">1M+ Balls</h3>
                      <p className="text-gray-300">Produced annually</p>
                    </div>
                  </ScrollReveal>
                </div>
                
                <ScrollReveal delay={0.9}>
                  <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
                  <p className="text-gray-300">
                    We're more than just a manufacturer – we're passionate supporters of the sport. 
                    Through partnerships with schools, leagues, and youth programs, we're helping to 
                    grow the game and develop the next generation of players.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}