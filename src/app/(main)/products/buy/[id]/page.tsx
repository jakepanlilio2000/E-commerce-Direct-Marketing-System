"use client";

import { useAuth } from '@/lib/AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

export default function BuySuccessPage({ params }: { params: { id: string } }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      alert("You must be logged in to order products.");
      router.push('/account');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="text-center py-20">
        <FaExclamationTriangle size={30} className="text-orange-500 mx-auto mb-4 animate-pulse" />
        <h1 className="text-3xl font-bold text-gray-700">Checking Login Status...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-10 bg-white rounded-xl shadow-2xl text-center border-t-8 border-green-600">
      <FaCheckCircle size={80} className="text-green-600 mx-auto mb-6" />
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Order Successful!</h1>
      <p className="text-xl text-gray-600 mb-6">
        Thank you, <span className="font-bold">{user.email}</span>!
      </p>
      <p className="text-lg text-gray-700 mb-8">
        Your order for product<span className="font-bold">{params.id}</span> has been confirmed. Expect a confirmation email and tracking details shortly.
      </p>
      <Link href="/products" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
        Continue Shopping
      </Link>
    </div>
  );
}