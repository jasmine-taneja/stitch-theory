
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getProductById, products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  Star, 
  Minus, 
  Plus, 
  ShoppingCart,
  Heart,
  Share,
  Package
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import ProductCard from '@/components/products/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [quantity, setQuantity] = useState(1);
  
  const handleAddToCart = () => {
    toast.success(`${product?.name} added to cart`, {
      description: `Quantity: ${quantity}`
    });
  };
  
  if (!product) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/categories">Browse Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  const hasDiscount = product.discountPrice !== undefined;
  
  return (
    <Layout>
      <div className="container py-12">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/categories" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" /> Back to Products
          </Link>
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-xl">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {hasDiscount && (
              <Badge className="absolute top-4 right-4 bg-stitch-600">Sale</Badge>
            )}
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <Link 
                to={`/categories/${categories.find(c => c.name === product.category)?.id}`} 
                className="text-sm text-stitch-600 hover:underline"
              >
                {product.category}
              </Link>
            </div>
            
            <h1 className="font-display text-3xl lg:text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm">{product.rating} out of 5</span>
            </div>
            
            <div className="flex items-baseline gap-3 mb-6">
              {hasDiscount ? (
                <>
                  <span className="text-3xl font-bold text-stitch-600">${product.discountPrice?.toFixed(2)}</span>
                  <span className="text-xl text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                  <Badge variant="outline" className="ml-2">
                    {Math.round(((product.price - (product.discountPrice || 0)) / product.price) * 100)}% OFF
                  </Badge>
                </>
              ) : (
                <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <p className="text-muted-foreground mb-8">{product.description}</p>
            
            <div className="flex items-center mb-6">
              <span className="mr-4">Quantity:</span>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setQuantity(q => q + 1)}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <span className="ml-4 text-sm text-muted-foreground">
                {product.stock} available
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-stitch-600 hover:bg-stitch-700 gap-2 flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Heart className="h-5 w-5" /> Wishlist
              </Button>
              <Button variant="outline" size="icon" className="hidden sm:flex">
                <Share className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="border-t border-gray-200 pt-6 flex gap-4">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-stitch-600" />
                <span className="text-sm">Free shipping on orders over $50</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="product-grid">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
