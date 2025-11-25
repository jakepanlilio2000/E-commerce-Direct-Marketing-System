"use client";

import Link from 'next/link';
import Image from 'next/image'; 
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; 
import { useAuth } from '@/lib/AuthProvider';
import { useRouter } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Promotions', href: '/promotions' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const { user, signOut, isLoading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        
        <Link href="/" className="text-2xl font-bold text-green-700 hover:text-green-800 transition duration-300 flex items-center space-x-2">
          
          <div className="relative w-8 h-8"> 
            <Image
              src="/images/logo.png" 
              alt="Mharthea Food Dealer Logo"
              fill 
              sizes="32px"
              style={{ objectFit: 'contain' }}
              priority 
            />
          </div>
          
          <span>Mharthea Food Dealer</span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-600 hover:text-green-700 font-medium transition duration-150">
              {item.name}
            </Link>
          ))}
        </nav>
        
        {isLoading ? (
          <div className="text-gray-500">Loading...</div>
        ) : user ? (
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-700 hidden lg:inline truncate max-w-[150px]">
              Hi, {user.email}
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition duration-150 p-2 rounded-full hover:bg-red-50"
              title="Logout"
            >
              <FaSignOutAlt size={20} />
              <span className="hidden sm:inline text-sm">Logout</span>
            </button>
          </div>
        ) : (
          <Link 
            href="/account" 
            className="flex items-center space-x-2 text-gray-600 hover:text-green-700 transition duration-150 p-2 rounded-full hover:bg-gray-100"
          >
            <FaUserCircle size={24} />
            <span className="hidden sm:inline">Login/Register</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;