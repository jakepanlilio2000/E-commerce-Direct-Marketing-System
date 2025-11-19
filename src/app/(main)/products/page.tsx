"use client";

import Image from 'next/image';
import React from 'react';
import { MOCK_PRODUCTS } from '@/lib/mockData';
import ProductCard from '@/components/direct-marketing/ProductCard';
import Link from 'next/link'; 

export default function ProductsPage() {
  const categories = Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)));
  
  return (
    <div className="py-6">
      

      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Our Quality Products</h1>
        

<p className="text-xl text-gray-600 max-w-3xl mx-auto">
  We offer products tailored to your needs, whether you are buying <span className="font-bold">groceries</span>, feeding a <span className="font-bold">family</span>, or shopping for <span className="font-bold">yourself</span>. Don't forget to check the Promotions page for <span className="font-bold">personalized offers</span>!
</p>

      </header>
      

      <nav className="flex flex-wrap justify-center space-x-3 mb-10">
        <button className="px-4 py-2 text-sm font-medium rounded-full bg-green-700 text-white shadow-md transition hover:bg-green-800">
          All Products
        </button>
        {categories.map(category => (
          <button 
            key={category}
            className="px-4 py-2 text-sm font-medium rounded-full bg-gray-200 text-gray-700 transition hover:bg-gray-300"
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {MOCK_PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      

      <section className="mt-16 text-center bg-orange-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-700 mb-3">Maximize Your Savings!</h3>
        <p className="text-lg text-gray-600 mb-4">
          Find coupons and bulk discounts on our dedicated promotions page.
        </p>
        <Link 
          href="/promotions" 
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Check Promotions Now
        </Link>
      </section>
      
    </div>
  );
}