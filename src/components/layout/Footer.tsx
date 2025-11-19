import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'; 

const socialLinks = [
  { name: 'Facebook', icon: FaFacebook, href: '#', color: 'hover:text-blue-600' },
  { name: 'Instagram', icon: FaInstagram, href: '#', color: 'hover:text-pink-500' },
  { name: 'TikTok', icon: FaTiktok, href: '#', color: 'hover:text-black' },
  { name: 'YouTube', icon: FaYoutube, href: '#', color: 'hover:text-red-600' },
];

const Footer = () => {
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
              <span className="block">Location: [Your Business Location]</span>
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`text-gray-400 ${social.color} transition duration-300`}
                  aria-label={`Link to Mharthea's ${social.name}`}
                >
                  <social.icon size={28} />
                </a>
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
    </footer>
  );
};

export default Footer;