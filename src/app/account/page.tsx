"use client"; 

import React, { useState } from 'react';
import { useAuth } from '@/lib/AuthProvider'; 
import { supabase } from '@/lib/supabaseClient'; 
import { FaUserCircle, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaGift } from 'react-icons/fa';

export default function AccountPage() {
  const { user, isLoading, signOut } = useAuth(); 
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (isRegistering) {
      const { data, error } = await supabase.auth.signUp({ email, password });
      
      if (error) {
        setError(error.message);
      } else if (data.user) {
        setMessage('Registration successful! Check your email to confirm your account before logging in.');
      } else {
        setMessage('Please check your email for the confirmation link.');
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        setError(error.message);
      } else {
        setMessage('Login successful!');
      }
    }
  };

  if (user) {
    return (
      <div className="max-w-xl mx-auto p-8 bg-white rounded-xl shadow-lg text-center border-t-4 border-green-600">
        <FaUserCircle size={60} className="text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back, Member!</h1>
        <p className="text-lg text-gray-600 mb-6">You are logged in as: <span className="font-bold">{user.email}</span></p>

        <div className="space-y-4 mb-8 text-left bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center"><FaGift className="mr-3 text-orange-500" /> Member Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Access to exclusive <span className="font-bold">Gold Membership</span> discounts.</li>
            <li>Receive <span className="font-bold">personalized offers</span> directly to your email.</li>
            <li>View your order history and manage subscriptions.</li>
          </ul>
        </div>

        <button
          onClick={signOut}
          disabled={isLoading}
          className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:opacity-50"
        >
          <FaSignOutAlt className="mr-2" />
          {isLoading ? 'Signing Out...' : 'Logout'}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg border-t-4 border-orange-500">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {isRegistering ? 'Create Your Account' : 'Member Login'}
        </h1>
        <p className="text-gray-600">
          {isRegistering 
            ? 'Sign up to unlock personalized discounts and membership benefits.'
            : 'Login to access your direct marketing offers.'
          }
        </p>
      </div>

      {error && <div className="p-3 mb-4 text-sm font-medium text-red-700 bg-red-100 rounded-lg">{error}</div>}
      {message && <div className="p-3 mb-4 text-sm font-medium text-green-700 bg-green-100 rounded-lg">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" 
          />
        </div>
        
        <button 
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:opacity-50"
        >
          {isRegistering ? <><FaUserPlus className="mr-2" /> Register & Join</> : <><FaSignInAlt className="mr-2" /> Log In</>}
        </button>
      </form>
      
      <p className="mt-4 text-center text-sm text-gray-600">
        {isRegistering ? 'Already have an account?' : "Don't have an account?"}
        <button 
          onClick={() => setIsRegistering(!isRegistering)} 
          className="text-orange-600 hover:text-orange-700 font-semibold ml-1 transition"
        >
          {isRegistering ? 'Log In Here' : 'Create One'}
        </button>
      </p>
    </div>
  );
}