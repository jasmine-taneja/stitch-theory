
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { categories, getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const category = categories.find(cat => cat.id === id);
  const products = getProductsByCategory(id || '');
  
  if (!category) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="mb-6">The category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/categories">Back to Categories</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white font-display text-4xl md:text-5xl font-bold">{category.name}</h1>
        </div>
      </div>
      
      <div className="container py-12">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/categories" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" /> Back to Categories
          </Link>
        </Button>
        
        <p className="text-lg mb-12 max-w-3xl">{category.description}</p>
        
        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">No products found</h2>
            <p className="text-muted-foreground">Check back soon for new items in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryDetail;
