import React from 'react';
import Navigation from '../components/Navigation';
import ProductsHero from '../components/products/ProductsHero';
import ProductGrid from '../components/products/ProductGrid';
import ResearchServices from '../components/products/ResearchServices';
import Footer from '../components/Footer';
import FadeIn from '../components/animations/FadeIn';

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        <ProductsHero />
      </FadeIn>
      <FadeIn delay={0.2}>
        <ProductGrid />
      </FadeIn>
      <FadeIn delay={0.3}>
        <ResearchServices />
      </FadeIn>
      <Footer />
    </div>
  );
};

export default Products;