import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-dark-950 flex items-center justify-center z-50" role="status" aria-label="Loading">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-[#CC73F8]/20 rounded-full animate-[spin_1.5s_linear_infinite]"></div>
        <div className="w-20 h-20 border-4 border-transparent border-t-[#CC73F8] rounded-full absolute top-0 left-0 animate-[spin_1s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}