import React from 'react';
import { Product } from '@/lib/mockData'; 
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/price';
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const targetText = Array.isArray(product.targetAudience)
    ? product.targetAudience.join(' / ')
    : product.targetAudience

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">

      <div className="h-48 w-full relative bg-gray-100 p-2 rounded-t-xl overflow-hidden">
          <Image
            src={product.imagePath} 
            alt={product.name}
            fill 
            style={{ objectFit: 'cover' }} 
            className="transition-transform duration-500 hover:scale-105"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw" 
          />
        </div>

      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-1">
          Target: {targetText}
        </span>

        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {product.name}
        </h3>

        <p className="text-2xl font-extrabold text-orange-600 mb-3">
          {formatPrice(product.price)}
        </p>

        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
          {product.description}
        </p>

        <Link
          href={`/products/buy/${product.id}`}
          className="mt-auto block text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          {product.callToAction || 'View Details'}
        </Link>
      </div>
    </div>
  )
};

export default ProductCard;