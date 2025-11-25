"use client"; 

import React, { useState, useMemo } from 'react';
import { MOCK_PRODUCTS } from '@/lib/mockData';
import ProductCard from '@/components/direct-marketing/ProductCard';
import Link from 'next/link';

const ALL_CATEGORIES = ['All Products', ...Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)))];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All Products');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All Products') {
      return MOCK_PRODUCTS;
    }
    return MOCK_PRODUCTS.filter(product => product.category === activeCategory);
  }, [activeCategory]);
  
  return (
    <div className="py-6">
      
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Our Quality Products</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer products tailored to your needs...
        </p>
      </header>
      
      <nav className="flex flex-wrap justify-center space-x-3 mb-10">
        {ALL_CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition ${
              activeCategory === category 
                ? 'bg-green-700 text-white shadow-md hover:bg-green-800' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">No products found in this category.</p>
        )}
      </div>
      
    </div>
  );
}