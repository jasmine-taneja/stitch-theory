
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/data/products';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${category.id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
        <div className="aspect-[16/9] overflow-hidden relative">
          <img 
            src={category.image} 
            alt={category.name} 
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <div className="text-white">
              <h3 className="font-display text-xl font-semibold">{category.name}</h3>
              <p className="text-sm text-white/80">{category.description}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
