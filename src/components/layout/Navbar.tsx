
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, User, Menu, Search, Home, Package, ShoppingBag, Info, LogIn } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-display text-xl font-bold text-foreground">Stitch Theory</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/categories" className="transition-colors hover:text-primary">
              Categories
            </Link>
            <Link to="/about" className="transition-colors hover:text-primary">
              About Us
            </Link>
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link to="/" className="flex items-center pb-6">
              <span className="font-display text-lg font-bold">Stitch Theory</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link
                to="/"
                className="flex items-center gap-2 py-2 text-lg font-semibold"
              >
                <Home className="h-5 w-5" />
                Home
              </Link>
              <Link
                to="/categories"
                className="flex items-center gap-2 py-2 text-lg font-semibold"
              >
                <ShoppingBag className="h-5 w-5" />
                Categories
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 py-2 text-lg font-semibold"
              >
                <Info className="h-5 w-5" />
                About Us
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <Link to="/" className="mr-6 flex items-center md:hidden">
          <span className="font-display text-xl font-bold">Stitch Theory</span>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className={`${searchOpen ? 'w-full' : 'hidden md:flex w-full md:w-auto md:max-w-sm'} relative`}>
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 md:w-[300px] lg:w-[300px]"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSearchOpen(!searchOpen)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          
          <Link to="/login">
            <Button variant="ghost" size="icon">
              <LogIn className="h-5 w-5" />
              <span className="sr-only">Login</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
