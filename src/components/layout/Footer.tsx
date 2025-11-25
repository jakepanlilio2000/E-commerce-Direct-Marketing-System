"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTiktok, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 

const socialLinks = [
  { name: 'Facebook', icon: FaFacebook, href: 'https://www.facebook.com/mhartheafooddealer', color: 'hover:text-blue-600', qrPath: '/images/qr-facebook.png' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/mharthea_food_dealer/', color: 'hover:text-pink-500', qrPath: '/images/qr-instagram.png' },
  { name: 'TikTok', icon: FaTiktok, href: 'https://www.tiktok.com/@mhartheafooddealer8', color: 'hover:text-black', qrPath: '/images/qr-tiktok.png' },
  { name: 'X', icon: FaXTwitter, href: 'https://x.com/MhartheaFood', color: 'hover:text-gray-400', qrPath: '/images/qr-x.png' },
];

interface ActiveQR {
  name: string;
  qrPath: string;
}

const Footer = () => {
  const [activeQR, setActiveQR] = useState<ActiveQR | null>(null);

  const openModal = (item: ActiveQR) => {
    setActiveQR(item);
  };

  const closeModal = () => {
    setActiveQR(null);
  };
  

  const getActiveHref = (name: string) => {
    return socialLinks.find(s => s.name === name)?.href || '#';
  };

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
          
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">Mharthea Food Dealer</h3>
            <p className="text-gray-400">
              "Quality Food, Delivered with Direct Savings." 
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-green-400 transition">About Us</Link></li>
              <li><Link href="/products" className="hover:text-green-400 transition">Our Products</Link></li>
              <li><Link href="/promotions" className="hover:text-green-400 transition">Promotions</Link></li>
              <li><Link href="/contact" className="hover:text-green-400 transition">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Reach Us</h4>
            <p className="text-gray-400 space-y-2">
              <span className="block">Email: <a href="mailto:info@mhartheafood.com" className="hover:text-green-400">info@mhartheafood.com</a></span>
              <span className="block">Phone: (123) 456-7890</span>
              <span className="block">Location: 123 Del Rosario Street, Barangay San Agustin, City of San Fernando, Pampanga, 2000</span>
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Scan & Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <button 
                  key={social.name} 
                  onClick={() => openModal(social)}
                  className={`text-gray-400 ${social.color} transition duration-300 focus:outline-none`}
                  aria-label={`Scan QR code for ${social.name}`}
                >
                  <social.icon size={28} />
                </button>
              ))}
            </div>
            <p className="mt-4 text-green-400 font-medium">
              Subscribe for Discounts!
            </p>
          </div>
          
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mharthea Food Dealer. All Rights Reserved.
        </div>
      </div>
      
      {activeQR && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div 
            className="bg-white p-6 rounded-lg shadow-2xl relative max-w-sm w-full"
            onClick={(e) => e.stopPropagation()} 
          >
            
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
              aria-label="Close"
            >
              <FaTimes size={24} />
            </button>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Scan or Click to Follow on {activeQR.name}
            </h3>
            
            <a 
              href={getActiveHref(activeQR.name)}
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeModal} 
              className="w-64 h-64 mx-auto relative bg-gray-100 p-2 rounded-lg block cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
            >
              <Image
                src={activeQR.qrPath}
                alt={`${activeQR.name} QR Code`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </a>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              Click the image or scan the QR code to connect directly!
            </p>
          </div>
        </div>
      )}

    </footer>
  );
};

export default Footer;