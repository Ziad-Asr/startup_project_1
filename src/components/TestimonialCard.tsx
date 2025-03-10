import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  index: number;
}

export default function TestimonialCard({ name, role, image, quote, index }: TestimonialCardProps) {
  return (
    <div 
      className={`testimonial-card glossy-card bg-dark-850/50 p-8 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 testimonial-card-${index + 1}`}
    >
      <div className="flex items-center mb-6">
        <img
          src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=200&q=80`}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-[#CC73F8]">{role}</p>
        </div>
      </div>
      <div className="relative">
        <p className="text-gray-300 mb-4">{quote}</p>
      </div>
      <div className="flex text-[#CC73F8]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>
    </div>
  );
}