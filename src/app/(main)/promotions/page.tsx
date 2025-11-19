"use client";

import React from 'react';
import { MOCK_PROMOTIONS } from '@/lib/mockData';
import PromotionCard from '@/components/direct-marketing/PromotionCard';
import NewsletterSignup from '@/components/direct-marketing/NewsletterSignup';
import { FaEnvelopeOpenText } from 'react-icons/fa';

export default function PromotionsPage() {
  return (
    <div className="py-6 space-y-12">
      

      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Exclusive Offers & Direct Savings</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          At Mharthea, we use direct marketing to bring you the best value. Below you'll find <span className="font-bold">discounts, personalized offers, and membership benefits</span> designed specifically for our valued customers.
        </p>
      </header>
      

      <section>
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">Current Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_PROMOTIONS.map(promo => (
            <PromotionCard key={promo.title} promotion={promo} />
          ))}
        </div>
      </section>


      <section className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gray-300">
        <div className="text-center mb-6">
          <FaEnvelopeOpenText size={40} className="text-gray-600 mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-gray-700">Email Marketing Sample</h2>
          <p className="text-lg text-gray-500">
            See the kind of <span className="font-bold">personalized offers</span> we send directly to our subscribers.
          </p>
        </div>
        

        <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-bold text-green-700">Subject: Hi [Customer Name], Your Week's Top Deals Are Here!</h3>
          <p className="text-gray-800">
            Dear <span className="font-bold">[Customer Name]</span>,
          </p>
          <p className="text-gray-800">
            Based on your recent purchases of quick meals, we know you value convenience. This week, we're giving you a <span className="font-bold">special 15% off</span> all Family-Size Prepared Meals!
          </p>
          <p className="text-red-600 font-bold text-center text-lg p-3 bg-red-50 rounded-md border border-red-200">
            Personalized Coupon Code: <span className="font-bold">MEALTIME15</span>
          </p>
          <p className="text-gray-800">
            Don't miss out! This offer expires Sunday. Use the link below to shop instantly.
          </p>

          <div className="text-center pt-2">
            <a href="/products" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Claim Your 15% Discount Now
            </a>
          </div>
        </div>
      </section>


      <NewsletterSignup />
      
    </div>
  );
}