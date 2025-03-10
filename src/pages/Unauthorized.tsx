import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#CC73F8]/10 mb-6">
              <Lock className="w-10 h-10 text-[#CC73F8] animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
            <p className="text-gray-400 mb-8">You don't have permission to access this page.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 rounded-lg bg-dark-850 text-white hover:bg-dark-800 transition-colors duration-300"
              >
                Go Back
              </button>
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
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-[#CC73F8] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-3 h-3 bg-[#CC73F8] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-3 h-3 bg-[#CC73F8] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}