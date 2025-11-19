"use client";

import React from 'react';
import Link from 'next/link'
import { FaBullseye, FaFlagCheckered, FaHandsHelping, FaHistory } from 'react-icons/fa';

const MissionVisionGoals = [
  {
    icon: FaBullseye,
    title: 'Our Mission',
    description: 'To source and deliver the highest quality food products directly to consumers, reducing waste and cost while ensuring personalized satisfaction for every customer, from individuals to bulk grocery buyers.',
  },
  {
    icon: FaFlagCheckered,
    title: 'Our Vision',
    description: 'To be the leading food distributor recognized for utilizing innovative direct marketing and logistics technology to provide unmatched customer service and convenience across the region.',
  },
  {
    icon: FaHandsHelping,
    title: 'Our Goals',
    description: '1. Achieve 98% customer satisfaction through personalized feedback loops. 2. Expand our direct membership base by 50% in the next two years. 3. Continuously offer the best personalized pricing through targeted promotions.',
  },
];

export default function AboutUsPage() {
  return (
    <div className="py-6 space-y-12">
      

      <header className="text-center mb-10 bg-green-50 p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-extrabold text-green-800 mb-3">About Mharthea Food Dealer</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Mharthea Food Dealer is built on the principle of direct value: connecting customers with premium food efficiently and affordably. We leverage technology to deliver personalized shopping experiences and guaranteed freshness.
        </p>
      </header>
      

      <section>
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">Our Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MissionVisionGoals.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-orange-500 flex flex-col items-center text-center">
              <item.icon size={36} className="text-orange-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-gray-100 p-8 rounded-xl shadow-inner">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 text-center">
            <FaHistory size={60} className="text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-700">Our Background</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-700 leading-relaxed mb-4">
              Mharthea Food Dealer started five years ago with a simple goal: to bypass traditional, costly distribution chains. The founders, frustrated by the lack of transparency in food sourcing and the inability of retailers to offer flexible pricing, decided to create a direct-to-consumer model. 
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              We invested heavily in logistics and customer data platforms, allowing us to implement our robust direct marketing strategy—offering the exact products you need, with the savings you deserve, and fostering a strong, direct relationship with our valued customer base.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Experience the Mharthea Difference</h2>
        <p className="text-lg text-gray-600 mb-6">
          Ready to enjoy quality food with the benefit of personalized pricing and service?
        </p>
        <Link 
          href="/promotions" 
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          See Our Direct Marketing Offers Today!
        </Link>
      </section>
      
    </div>
  );
}