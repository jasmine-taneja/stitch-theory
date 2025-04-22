
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PromoSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1611930022073-84f7bb4c3c07?q=80&w=987&auto=format&fit=crop"
              alt="New Arrivals"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-display text-3xl font-bold text-white mb-2">New Arrivals</h3>
              <p className="text-white/90 mb-4">Discover our latest collection of trendsetting pieces.</p>
              <Button asChild className="bg-white text-black hover:bg-white/90 self-start">
                <Link to="/new-arrivals">Shop Now</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=1030&auto=format&fit=crop"
              alt="Sustainable Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-display text-3xl font-bold text-white mb-2">Sustainable Collection</h3>
              <p className="text-white/90 mb-4">Eco-friendly materials meet cutting-edge design.</p>
              <Button asChild className="bg-white text-black hover:bg-white/90 self-start">
                <Link to="/sustainable">Explore</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
