import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Error() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-6">
              <AlertCircle className="w-10 h-10 text-red-500 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Oops!</h1>
            <p className="text-gray-400 mb-8">Something went wrong. We couldn't find what you were looking for.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white hover:from-[#B561E5] hover:to-[#C87AF6] transition-all duration-300 shadow-lg hover:shadow-[#CC73F8]/20"
              >
                Return Home
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#CC73F8]/20 to-[#D68DF9]/20 blur-xl"></div>
            <div className="relative bg-dark-850 rounded-lg p-6 glossy-card">
              <div className="space-y-4">
                <div className="h-2 w-3/4 bg-dark-800 rounded animate-pulse"></div>
                <div className="h-2 w-1/2 bg-dark-800 rounded animate-pulse"></div>
                <div className="h-2 w-5/6 bg-dark-800 rounded animate-pulse"></div>
                <div className="h-2 w-2/3 bg-dark-800 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}