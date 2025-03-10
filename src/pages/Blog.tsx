import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SkeletonLoader from '../components/SkeletonLoader';
import Pagination from '../components/Pagination';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const blogPosts = [
  {
    id: 'mastering-jump-shot',
    title: 'Mastering the Perfect Jump Shot',
    category: 'Tips & Tricks',
    readTime: '5 min read',
    image: 'photo-1546519638-68e109498ffc',
    excerpt: 'Learn the fundamentals of a perfect jump shot from professional coaches...'
  },
  {
    id: 'pro-series-launch',
    title: 'New Pro Series Launch Event',
    category: 'News',
    readTime: '3 min read',
    image: 'photo-1544919982-b61976f0ba43',
    excerpt: 'Exciting new products coming to our Professional Series line...'
  },
  {
    id: 'basketball-care-guide',
    title: 'Basketball Care Guide',
    category: 'Maintenance',
    readTime: '4 min read',
    image: 'photo-1587280501635-68a0e82cd5ff',
    excerpt: 'Essential tips for maintaining your basketball in top condition...'
  },
  {
    id: 'training-tips',
    title: 'Training Tips from the Pros',
    category: 'Training',
    readTime: '6 min read',
    image: 'photo-1519861531473-9200262188bf',
    excerpt: 'Professional players share their training secrets and routines...'
  },
  {
    id: 'choosing-right-ball',
    title: 'Choosing the Right Ball',
    category: 'Equipment',
    readTime: '3 min read',
    image: 'photo-1518063319789-7217e6706b04',
    excerpt: 'A comprehensive guide to selecting the perfect basketball...'
  },
  {
    id: 'improving-ball-control',
    title: 'Improving Ball Control',
    category: 'Technique',
    readTime: '4 min read',
    image: 'photo-1574623452334-1e0ac2b3ccb4',
    excerpt: 'Advanced techniques for improving your ball handling skills...'
  },
  {
    id: 'basketball-history',
    title: 'The Evolution of Basketball',
    category: 'History',
    readTime: '7 min read',
    image: 'photo-1579338559194-a162d19bf842',
    excerpt: 'Exploring the rich history and development of basketball...'
  },
  {
    id: 'mental-preparation',
    title: 'Mental Preparation for Game Day',
    category: 'Psychology',
    readTime: '5 min read',
    image: 'photo-1608245449230-4ac19066d2d0',
    excerpt: 'Psychological techniques to improve your game performance...'
  },
  {
    id: 'nutrition-guide',
    title: 'Nutrition Guide for Basketball Players',
    category: 'Health',
    readTime: '6 min read',
    image: 'photo-1612872087720-bb876e2e67d1',
    excerpt: 'Essential nutrition tips for optimal performance on the court...'
  },
  {
    id: 'defensive-strategies',
    title: 'Advanced Defensive Strategies',
    category: 'Strategy',
    readTime: '5 min read',
    image: 'photo-1546519638-68e109498ffc',
    excerpt: 'Master the art of defense with these professional techniques...'
  },
  {
    id: 'basketball-drills',
    title: 'Essential Basketball Drills',
    category: 'Training',
    readTime: '4 min read',
    image: 'photo-1544919982-b61976f0ba43',
    excerpt: 'Improve your skills with these fundamental basketball drills...'
  },
  {
    id: 'team-building',
    title: 'Building Team Chemistry',
    category: 'Team Development',
    readTime: '5 min read',
    image: 'photo-1587280501635-68a0e82cd5ff',
    excerpt: 'Tips for developing strong team dynamics and cooperation...'
  }
];

const ITEMS_PER_PAGE = 6;

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return blogPosts.slice(startIndex, endIndex);
  };

  if (isLoading) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="h-8 bg-dark-800 rounded w-48 mb-12 animate-pulse"></div>
          <SkeletonLoader type="blog" count={6} />
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-4xl font-bold text-white mb-12">Latest News & Tips</h1>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getCurrentPageItems().map((post, index) => (
              <ScrollReveal 
                key={post.id} 
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <article className="glossy-card bg-dark-850 rounded-lg shadow-xl overflow-hidden group">
                  <div className="relative">
                    <img
                      src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-sm text-[#CC73F8]">{post.category}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="text-sm text-gray-400">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 text-white">{post.title}</h2>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-[#CC73F8] hover:text-[#D68DF9] font-semibold inline-block"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
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