import Link from 'next/link';
import Image from 'next/image';
import { FaTruckLoading, FaTags, FaUsers } from 'react-icons/fa';
import { MOCK_PRODUCTS } from '../lib/mockData';
import NewsletterSignup from '../components/direct-marketing/NewsletterSignup';

const featuredProduct = MOCK_PRODUCTS[0];

export default function HomePage() {
  return (
    <div className="space-y-16">
      
      <section className="relative bg-green-50 rounded-xl shadow-lg overflow-hidden p-10 md:p-16 text-center">
       
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-800 leading-tight mb-4">
          Quality Food, Delivered with <span className="text-green-600">Direct Savings.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Mharthea Food Dealer is dedicated to providing high-quality, fresh groceries and prepared meals for <span className="font-bold">individuals and families</span>, ensuring convenience and value through <span className="font-bold">personalized offers</span> and efficient service.
        </p>

        <Link 
          href="/products" 
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-xl transition duration-300 transform hover:scale-105"
        >
          🛒 Discover Our Products Now
        </Link>
      </section>


      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-8">How We Deliver Value Directly to You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-green-500">
            <FaUsers size={40} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Shopping</h3>
            <p className="text-gray-600">
              We track your preferences to offer discounts tailored just for <span className="font-bold">parents, individuals, or bulk grocery buyers</span>.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-orange-500">
            <FaTags size={40} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exclusive Promotions</h3>
            <p className="text-gray-600">
              Access members-only <span className="font-bold">coupons and promotions</span>. Check our Promotions page daily!
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500">
            <FaTruckLoading size={40} className="text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast & Fresh Delivery</h3>
            <p className="text-gray-600">
              Reliable delivery ensures your <span className="font-bold">groceries</span> arrive fresh, fast, and exactly when you need them.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          {}
          <div className="h-64 w-full relative rounded-lg overflow-hidden shadow-inner border border-gray-100">
            <Image
              src={featuredProduct.imagePath || '/images/product-mock-1.jpg'} 
              alt={featuredProduct.name}
              fill 
              style={{ objectFit: 'cover' }} 
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <span className="text-sm font-semibold text-green-500 uppercase tracking-wider">Featured Today</span>
          <h2 className="text-4xl font-bold text-gray-700 mb-4">{featuredProduct.name}</h2>
          <p className="text-gray-600 mb-4">{featuredProduct.description}</p>
          <p className="text-2xl font-bold text-orange-500 mb-6">${featuredProduct.price.toFixed(2)}</p>
          
          <Link 
            href="/products" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            {featuredProduct.callToAction}
          </Link>
        </div>
      </section>

      <section>
        <NewsletterSignup />
      </section>

    </div>
  );
}
