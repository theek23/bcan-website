import React from 'react';
import { ShoppingCart, Shield, Award, Clock } from 'lucide-react';
import { products } from '../../data/products';

interface ProductViewProps {
  productId?: string;
}

const ProductView: React.FC<ProductViewProps> = ({ productId }) => {
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{product.description}</p>
            
            <div className="space-y-4 mb-8">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Shield className="w-5 h-5 text-pink-600 mt-1 mr-3" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-b border-gray-200 py-6 mb-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Shield className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                  <span className="text-sm text-gray-600">FDA Approved</span>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                  <span className="text-sm text-gray-600">Clinically Tested</span>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                  <span className="text-sm text-gray-600">24/7 Support</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-8">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              <button className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;