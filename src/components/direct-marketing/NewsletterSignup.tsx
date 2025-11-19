'use client';

import React from 'react';

const NewsletterSignup = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing! Check your email for a welcome coupon.');
  };

  return (
    <div className="bg-gray-100 p-8 rounded-xl shadow-inner text-center">
      <h3 className="text-3xl font-bold text-gray-800 mb-2">Unlock Exclusive Savings!</h3>
      <p className="text-gray-600 mb-6">
        Sign up for our email list to receive <span className="font-bold">personalized weekly coupons</span> and recipe ideas directly to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input 
          type="email" 
          placeholder="Enter your email address" 
          required 
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
        />
        <button 
          type="submit" 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 whitespace-nowrap"
        >
          Subscribe for Discounts!
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;