
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoriesShowcase from '@/components/home/CategoriesShowcase';
import PromoSection from '@/components/home/PromoSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <CategoriesShowcase />
      <PromoSection />
    </Layout>
  );
};

export default Index;
