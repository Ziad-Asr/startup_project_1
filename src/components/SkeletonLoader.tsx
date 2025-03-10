import React from 'react';

interface SkeletonLoaderProps {
  type: 'product' | 'blog' | 'text';
  count?: number;
}

export default function SkeletonLoader({ type, count = 1 }: SkeletonLoaderProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'product':
        return (
          <div className="glossy-card bg-dark-850 rounded-lg shadow-xl overflow-hidden animate-pulse">
            <div className="h-48 bg-dark-800"></div>
            <div className="p-6">
              <div className="h-6 bg-dark-800 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-dark-800 rounded w-full mb-2"></div>
              <div className="h-4 bg-dark-800 rounded w-5/6"></div>
              <div className="flex justify-between items-center mt-4">
                <div className="h-6 bg-dark-800 rounded w-20"></div>
                <div className="h-6 bg-dark-800 rounded w-24"></div>
              </div>
            </div>
          </div>
        );
      case 'blog':
        return (
          <div className="glossy-card bg-dark-850 rounded-lg shadow-xl overflow-hidden animate-pulse">
            <div className="h-48 bg-dark-800"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-4 bg-dark-800 rounded w-20"></div>
                <div className="mx-2 text-gray-500">•</div>
                <div className="h-4 bg-dark-800 rounded w-24"></div>
              </div>
              <div className="h-6 bg-dark-800 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-dark-800 rounded w-full mb-2"></div>
              <div className="h-4 bg-dark-800 rounded w-5/6"></div>
            </div>
          </div>
        );
      case 'text':
        return (
          <div className="space-y-3 animate-pulse">
            <div className="h-4 bg-dark-800 rounded w-full"></div>
            <div className="h-4 bg-dark-800 rounded w-5/6"></div>
            <div className="h-4 bg-dark-800 rounded w-4/6"></div>
          </div>
        );
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </div>
  );
}