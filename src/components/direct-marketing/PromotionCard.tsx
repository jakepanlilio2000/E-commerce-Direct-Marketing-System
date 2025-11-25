"use client"; 

import React, { useState } from 'react';
import { Promotion } from '@/lib/mockData';
import { FaTicketAlt, FaHandshake, FaTag, FaClipboardCheck } from 'react-icons/fa';
import Link from 'next/link';

interface PromotionCardProps {
  promotion: Promotion;
}

const getIcon = (type: Promotion['type']) => {
  switch (type) {
    case 'Coupon':
      return <FaTicketAlt size={30} className="text-orange-500" />;
    case 'Membership':
      return <FaHandshake size={30} className="text-blue-500" />;
    case 'Discount':
      return <FaTag size={30} className="text-green-500" />;
    default:
      return <FaTag size={30} className="text-gray-500" />;
  }
};

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
  const [copied, setCopied] = useState(false);

  const handleAction = () => {
    if (promotion.type === 'Coupon') {
      navigator.clipboard.writeText(promotion.details.replace('Use code: ', ''));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return;
    }
    alert(`Redirecting you to complete the action: ${promotion.callToAction}`);
  };

  const buttonText = () => {
    if (promotion.type === 'Coupon') {
      return copied ? (
        <>
          <FaClipboardCheck className="mr-2" /> Code Copied!
        </>
      ) : (
        'Copy Code & Shop'
      );
    }
    return promotion.callToAction;
  };

  return (
    <div className="bg-white border-l-8 rounded-lg shadow-md p-6 transition transform hover:scale-[1.01] duration-300"
         style={{ borderLeftColor: promotion.type === 'Coupon' ? '#f97316' : promotion.type === 'Membership' ? '#3b82f6' : '#10b981' }}>
      
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={`inline-block px-3 py-1 text-xs font-bold uppercase rounded-full ${
            promotion.type === 'Coupon' ? 'bg-orange-100 text-orange-700' : 
            promotion.type === 'Membership' ? 'bg-blue-100 text-blue-700' : 
            'bg-green-100 text-green-700'
          }`}>
            {promotion.type} Offer
          </span>
          <h3 className="text-2xl font-bold text-gray-800 mt-2">{promotion.title}</h3>
        </div>
        {getIcon(promotion.type)}
      </div>

      <p className="text-gray-600 mb-4">{promotion.description}</p>
      
      {promotion.type === 'Coupon' ? (
        <div className="bg-gray-100 border border-dashed border-gray-400 p-3 rounded-md mb-4 text-center">
          <p className="text-sm text-gray-700">Coupon Code:</p>
          <p className="text-xl font-mono font-extrabold text-red-600 select-all">{promotion.details.replace('Use code: ', '')}</p>
        </div>
      ) : (
        <p className="text-sm font-medium text-gray-700 bg-gray-100 p-3 rounded-md mb-4">
          <span className="font-bold">Details:</span> {promotion.details}
        </p>
      )}

      <button 
        onClick={handleAction} 
        className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 flex items-center justify-center ${
          promotion.type === 'Coupon' ? 'bg-orange-600 hover:bg-orange-700' : 
          promotion.type === 'Membership' ? 'bg-blue-600 hover:bg-blue-700' : 
          'bg-green-600 hover:bg-green-700'
        }`}
      >
        {buttonText()}
      </button>
    </div>
  );
};

export default PromotionCard;