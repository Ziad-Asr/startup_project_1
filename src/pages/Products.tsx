import React, { useState, useEffect } from 'react';
import SkeletonLoader from '../components/SkeletonLoader';
import Pagination from '../components/Pagination';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const products = [
  {
    id: 1,
    name: 'Pro Elite Basketball',
    description: 'Professional-grade basketball with superior grip',
    price: 89.99,
    image: 'photo-1519861531473-9200262188bf'
  },
  {
    id: 2,
    name: 'Street Master Ball',
    description: 'Durable outdoor basketball for street games',
    price: 49.99,
    image: 'photo-1518063319789-7217e6706b04'
  },
  {
    id: 3,
    name: 'Junior Training Ball',
    description: 'Perfect size and weight for young players',
    price: 34.99,
    image: 'photo-1574623452334-1e0ac2b3ccb4'
  },
  {
    id: 4,
    name: 'Competition Series',
    description: 'Official size and weight for competitive play',
    price: 79.99,
    image: 'photo-1546519638-68e109498ffc'
  },
  {
    id: 5,
    name: 'Indoor Premium',
    description: 'Optimized for indoor court performance',
    price: 69.99,
    image: 'photo-1544919982-b61976f0ba43'
  },
  {
    id: 6,
    name: 'Outdoor Durability',
    description: 'Weather-resistant for outdoor durability',
    price: 54.99,
    image: 'photo-1587280501635-68a0e82cd5ff'
  },
  {
    id: 7,
    name: 'Elite Pro Series X',
    description: 'Advanced grip technology with premium leather',
    price: 99.99,
    image: 'photo-1579338559194-a162d19bf842'
  },
  {
    id: 8,
    name: 'Performance Plus',
    description: 'Enhanced durability with superior control',
    price: 84.99,
    image: 'photo-1608245449230-4ac19066d2d0'
  },
  {
    id: 9,
    name: 'Youth Development Ball',
    description: 'Specially designed for young athletes',
    price: 39.99,
    image: 'photo-1612872087720-bb876e2e67d1'
  },
  {
    id: 10,
    name: 'Tournament Edition',
    description: 'Official tournament specification ball',
    price: 94.99,
    image: 'photo-1519861531473-9200262188bf'
  },
  {
    id: 11,
    name: 'Practice Master',
    description: 'Ideal for daily training sessions',
    price: 59.99,
    image: 'photo-1518063319789-7217e6706b04'
  },
  {
    id: 12,
    name: 'All-Weather Pro',
    description: 'Performs in any weather condition',
    price: 64.99,
    image: 'photo-1574623452334-1e0ac2b3ccb4'
  },
  {
    id: 13,
    name: 'Elite Control',
    description: 'Maximum grip and ball control',
    price: 89.99,
    image: 'photo-1546519638-68e109498ffc'
  },
  {
    id: 14,
    name: 'Pro Team Special',
    description: 'Designed for professional team practice',
    price: 74.99,
    image: 'photo-1544919982-b61976f0ba43'
  },
  {
    id: 15,
    name: 'Street Legend',
    description: 'Built for street basketball culture',
    price: 69.99,
    image: 'photo-1587280501635-68a0e82cd5ff'
  }
];

const ITEMS_PER_PAGE = 6;

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return products.slice(startIndex, endIndex);
  };

  if (isLoading) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="h-8 bg-dark-800 rounded w-48 mb-12 animate-pulse"></div>
          <SkeletonLoader type="product" count={6} />
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-4xl font-bold text-white mb-12">Our Products</h1>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getCurrentPageItems().map((product, index) => (
              <ScrollReveal 
                key={product.id} 
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className="glossy-card bg-dark-850 rounded-lg shadow-xl overflow-hidden group">
                  <div className="relative">
                    <img
                      src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-850 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-[#CC73F8]">${product.price}</span>
                      <button className="text-[#CC73F8] hover:text-[#D68DF9] font-semibold">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}