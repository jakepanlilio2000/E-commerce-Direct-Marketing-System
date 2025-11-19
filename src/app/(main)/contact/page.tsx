"use client";

import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import NewsletterSignup from '@/components/direct-marketing/NewsletterSignup';

const contactInfo = [
  { 
    icon: FaEnvelope, 
    title: 'Email Address', 
    detail: 'info@mhartheafood.com', 
    href: 'mailto:info@mhartheafood.com' 
  },
  { 
    icon: FaPhone, 
    title: 'Phone Number', 
    detail: '(123) 456-7890', 
    href: 'tel:+11234567890' 
  },
  { 
    icon: FaMapMarkerAlt, 
    title: 'Our Location', 
    detail: '123 Food Distribution Center, City, Zip 10001', 
    href: '#' 
  },
];

export default function ContactPage() {
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Your message has been sent successfully! We will respond within 24 hours.');
    
  };

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.9181730416394!2d120.65065647572145!3d14.997246867241397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f625eab36c87%3A0x3f69778f5466108f!2sDon%20Honorio%20Ventura%20State%20University!5e0!3m2!1sen!2sph!4v1763533389153!5m2!1sen!2sph";

  return (
    <div className="py-6 space-y-12">
      

      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Get In Touch With Mharthea</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We love hearing from our customers! Use the form below or contact us directly using the details provided.
        </p>
      </header>


      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {contactInfo.map((item, index) => (
          <a key={index} href={item.href} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:translate-y-[-2px] border-t-4 border-green-500">
            <item.icon size={36} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 font-medium">{item.detail}</p>
          </a>
        ))}

        <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-orange-500">
          <FaClock size={36} className="text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Operation Hours</h3>
          <p className="text-gray-600 font-medium">Mon - Fri: 8:00 AM - 5:00 PM</p>
          <p className="text-gray-600 font-medium">Sat: 9:00 AM - 1:00 PM</p>
        </div>
      </section>


      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 p-8 rounded-xl shadow-inner">
        

        <div>
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Send Us a Message</h2>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" id="name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" rows={4} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        

        <div className="hidden md:block">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Find Our Center</h2>
          <div className="h-full min-h-[300px] bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
            <iframe
              src={mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mharthea Food Dealer Location Map"
            ></iframe>
          </div>
        </div>
      </section>
      

      <section>
        <NewsletterSignup />
      </section>
      
    </div>
  );
}