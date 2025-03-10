import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type FormType = 'blog' | 'product';

export default function Admin() {
  const [formType, setFormType] = useState<FormType>('blog');

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Admin Dashboard</h1>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <button
                onClick={() => setFormType('blog')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                  formType === 'blog'
                    ? 'bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Blog Articles
              </button>
              <button
                onClick={() => setFormType('product')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                  formType === 'product'
                    ? 'bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Products
              </button>
            </div>
          </div>

          <div className="glossy-card bg-dark-850 p-4 sm:p-8 rounded-lg">
            {formType === 'blog' ? (
              <form className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-white font-medium mb-2">Title</label>
                  <input
                    type="text"
                    id="title"
                    className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                    placeholder="Article title"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-white font-medium mb-2">Category</label>
                  <select
                    id="category"
                    className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                  >
                    <option value="Tips & Tricks">Tips & Tricks</option>
                    <option value="News">News</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Training">Training</option>
                    <option value="Equipment">Equipment</option>
                    <option value="Technique">Technique</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="image" className="block text-white font-medium mb-2">Image URL</label>
                  <input
                    type="text"
                    id="image"
                    className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                    placeholder="Unsplash image URL"
                  />
                </div>

                <div>
                  <label htmlFor="author" className="block text-white font-medium mb-2">Author</label>
                  <input
                    type="text"
                    id="author"
                    className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                    placeholder="Author name"
                  />
                </div>

                <div>
                  <label htmlFor="content" className="block text-white font-medium mb-2">Content</label>
                  <textarea
                    id="content"
                    rows={10}
                    className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                    placeholder="Article content (HTML supported)"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white px-6 py-3 rounded-lg hover:from-[#B561E5] hover:to-[#C87AF6] transition-all duration-300 shadow-lg hover:shadow-[#CC73F8]/20"
                >
                  Add Blog Article
                </button>
              </form>
            ) : (
              <form className="space-y-6">
                <div>
                  <label htmlFor="productName" className="block text-white font-medium mb-2">Product Name</label>
                  <input
                    type="text"
                    id="productName"
                    className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                    placeholder="Product name"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-white font-medium mb-2">Description</label>
                  <textarea
                    id="description"
                    rows={3}
                    className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                    placeholder="Product description"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="productImage" className="block text-white font-medium mb-2">Image URL</label>
                  <input
                    type="text"
                    id="productImage"
                    className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                    placeholder="Unsplash image URL"
                  />
                </div>

                <div>
                  <label htmlFor="price" className="block text-white font-medium mb-2">Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-400">$</span>
                    <input
                      type="number"
                      id="price"
                      step="0.01"
                      min="0"
                      className="w-full bg-dark-900 text-white pl-8 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                      placeholder="99.99"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-white font-medium mb-2">Category</label>
                  <select
                    id="category"
                    className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                  >
                    <option value="professional">Professional</option>
                    <option value="training">Training</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="indoor">Indoor</option>
                    <option value="junior">Junior</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white px-6 py-3 rounded-lg hover:from-[#B561E5] hover:to-[#C87AF6] transition-all duration-300 shadow-lg hover:shadow-[#CC73F8]/20"
                >
                  Add Product
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}