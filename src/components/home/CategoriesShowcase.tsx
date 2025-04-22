
import React from 'react';
import { categories } from '@/data/products';
import CategoryCard from '@/components/products/CategoryCard';

const CategoriesShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="font-display text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesShowcase;
