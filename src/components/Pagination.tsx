import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  const renderPageNumbers = () => {
    if (totalPages <= 5) {
      return pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
            currentPage === page
              ? 'bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {page}
        </button>
      ));
    }

    let pagesToShow = [];
    if (currentPage <= 3) {
      pagesToShow = [1, 2, 3, '...', totalPages];
    } else if (currentPage >= totalPages - 2) {
      pagesToShow = [1, '...', totalPages - 2, totalPages - 1, totalPages];
    } else {
      pagesToShow = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }

    return pagesToShow.map((page, index) => {
      if (page === '...') {
        return (
          <span key={`ellipsis-${index}`} className="w-10 h-10 flex items-center justify-center text-gray-400">
            ...
          </span>
        );
      }
      return (
        <button
          key={page}
          onClick={() => onPageChange(page as number)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
            currentPage === page
              ? 'bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          currentPage === 1
            ? 'text-gray-600 cursor-not-allowed'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          currentPage === totalPages
            ? 'text-gray-600 cursor-not-allowed'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}