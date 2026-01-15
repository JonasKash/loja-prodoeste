import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Truck } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Product Image */}
      <div className="relative">
        <Link to={`/produto/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isOriginal && (
            <span className="bg-black text-white text-xs px-2 py-1 rounded-full font-medium">
              Original
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="absolute top-2 right-2">
          {product.stock > 0 ? (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Em Estoque
            </span>
          ) : (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Sem Estoque
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <Link to={`/produto/${product.slug}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-black transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Brand & Model */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-sm text-gray-600">
            {product.brand} {product.model}
          </span>
          {product.year && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {product.year}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-4">
          {product.originalPrice && product.originalPrice > product.price ? (
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-black">
                {formatPrice(product.price)}
              </span>
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            </div>
          ) : (
            <span className="text-2xl font-bold text-black">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Link
            to={`/produto/${product.slug}`}
            className="flex-1 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-center font-medium"
          >
            Ver Detalhes
          </Link>
          <button
            className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            title="Adicionar ao carrinho"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Estoque: {product.stock} unidades</span>
            <div className="flex items-center space-x-1">
              <Truck className="w-3 h-3" />
              <span>Entrega rápida</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 