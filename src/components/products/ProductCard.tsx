
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, discountPrice, image, rating, category } = product;
  
  const hasDiscount = discountPrice !== undefined;
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      <Link to={`/product/${id}`} className="overflow-hidden">
        <div className="aspect-[4/4] overflow-hidden relative group">
          <img 
            src={image} 
            alt={name} 
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          {hasDiscount && (
            <Badge className="absolute top-2 right-2 bg-stitch-600">Sale</Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-4 flex-1 flex flex-col">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-lg mb-1 line-clamp-1 hover:text-stitch-600 transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{category}</p>
        <div className="flex items-center mt-auto">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col items-start gap-2">
        <div className="flex items-baseline gap-2">
          {hasDiscount ? (
            <>
              <span className="text-lg font-bold text-stitch-600">${discountPrice.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground line-through">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-lg font-bold">${price.toFixed(2)}</span>
          )}
        </div>
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
