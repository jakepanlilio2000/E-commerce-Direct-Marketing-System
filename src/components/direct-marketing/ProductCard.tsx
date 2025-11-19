import React from 'react';
import { Product } from '@/lib/mockData'; 
import Link from 'next/link';
import Image from 'next/image';
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => { 
  const targetText = Array.isArray(product.targetAudience) 
    ? product.targetAudience.join(' / ') 
    : product.targetAudience;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      
      <div className="relative h-48 w-full">
        <Image
          src={product.imagePath} 
          alt={`Image of ${product.name}`}
          fill
          style={{ objectFit: 'cover' }} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={product.id === 1} 
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        
        <span className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-1">
          Target: {targetText}
        </span>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        
        <p className="text-2xl font-extrabold text-orange-600 mb-3">${product.price.toFixed(2)}</p>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
          {product.description}
        </p>
        
        <Link 
          href={`/products/${product.id}`}
          className="mt-auto block text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          {product.callToAction || "View Details"} 
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;