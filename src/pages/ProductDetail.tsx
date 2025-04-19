import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ProductView from '../components/products/ProductView';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ProductView productId={id} />
      <Footer />
    </div>
  );
};

export default ProductDetail;