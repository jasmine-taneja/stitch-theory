
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          
          <div className="aspect-[16/9] mb-8 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1469&auto=format&fit=crop" 
              alt="Stitch Theory Team" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl">Stitch Theory was born at the intersection of fashion, technology, and sustainability.</p>
            
            <p>Founded in 2019 by a team of designers and engineers, we set out to reimagine what clothing could be in a digital age. We believe that fashion should be both beautiful and functional, designed with both human and environmental welfare in mind.</p>
            
            <p>What began as a small workshop in Brooklyn has grown into a global brand with a simple mission: to create thoughtfully designed products that enhance our customers' lives while minimizing our impact on the planet.</p>
            
            <h2 className="font-display text-3xl font-bold mt-12 mb-4">Our Approach</h2>
            
            <p>We approach design with three core principles:</p>
            
            <ul>
              <li><strong>Minimalism</strong> — We focus on what matters, stripping away the unnecessary to create designs that are timeless and versatile.</li>
              <li><strong>Innovation</strong> — We integrate technology into our products in ways that enhance their functionality without sacrificing aesthetics.</li>
              <li><strong>Sustainability</strong> — We use eco-friendly materials and ethical manufacturing processes to create products with minimal environmental impact.</li>
            </ul>
            
            <h2 className="font-display text-3xl font-bold mt-12 mb-4">Our Vision</h2>
            
            <p>We envision a future where technology and craftsmanship come together to create products that are not just consumed, but cherished. Where fashion isn't dictated by fast-changing trends, but by quality, functionality, and conscious design.</p>
            
            <p>At Stitch Theory, we're building that future, one stitch at a time.</p>
            
            <div className="mt-12">
              <Button asChild size="lg" className="bg-stitch-600 hover:bg-stitch-700">
                <Link to="/categories">Explore Our Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
