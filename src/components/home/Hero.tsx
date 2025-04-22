
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=2070&auto=format&fit=crop" 
          alt="Stitch Theory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>
      
      <div className="container relative h-full flex flex-col justify-center text-white">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
            The Future of Fashion is Here
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Discover our collection of minimal, sustainable, and tech-integrated apparel.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-stitch-600 hover:bg-stitch-700">
              <Link to="/categories">Shop Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
