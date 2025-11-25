"use client";

import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setTimeout(() => {
        setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 p-8 rounded-xl shadow-inner text-center border-t-4 border-green-600">
        <h3 className="text-3xl font-bold text-green-700 mb-2">🎉 You're Subscribed!</h3>
        <p className="text-gray-700 mb-4">
          Check your email for your welcome coupon code: <span className="font-bold">MHARTHEA50</span> for <span className="font-bold">₱50 off</span> your next order!
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-sm text-green-600 hover:text-green-800 transition"
        >
          (Click to hide message)
        </button>
      </div>
    );
  }

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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