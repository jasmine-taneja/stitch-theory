
import React from 'react';
import Layout from '@/components/layout/Layout';
import { categories, products } from '@/data/products';
import CategoryCard from '@/components/products/CategoryCard';
import ProductCard from '@/components/products/ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Categories = () => {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="font-display text-4xl font-bold mb-12 text-center">Browse Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="font-display text-3xl font-bold mb-8">All Products</h2>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.name}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="product-grid">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.name} className="mt-8">
                <div className="product-grid">
                  {products
                    .filter((product) => product.category === category.name)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
