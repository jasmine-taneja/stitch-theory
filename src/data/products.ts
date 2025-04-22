
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  tags: string[];
  rating: number;
  stock: number;
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Apparel",
    description: "Clothing and fashion items",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=870&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Home Decor",
    description: "Decorative items for your home",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=870&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Electronics",
    description: "The latest gadgets and devices",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=901&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Accessories",
    description: "Complete your look with our accessories",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=870&auto=format&fit=crop"
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Minimal Thread Pullover",
    description: "Premium quality pullover made with sustainable materials. This comfortable, versatile piece will be the perfect addition to your wardrobe.",
    price: 79.99,
    discountPrice: 59.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1528&auto=format&fit=crop",
    category: "Apparel",
    tags: ["pullover", "winter", "casual"],
    rating: 4.8,
    stock: 45,
    featured: true
  },
  {
    id: "2",
    name: "Elegant Timepiece",
    description: "A sophisticated watch that combines modern technology with classic design. Perfect for any occasion.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?q=80&w=1528&auto=format&fit=crop",
    category: "Accessories",
    tags: ["watch", "luxury", "accessory"],
    rating: 4.9,
    stock: 15,
    featured: true
  },
  {
    id: "3",
    name: "Smart Home Hub",
    description: "Control your entire home with this intuitive smart home hub. Compatible with all major smart home devices.",
    price: 249.99,
    discountPrice: 199.99,
    image: "https://images.unsplash.com/photo-1532293064562-5cc7ad5f710c?q=80&w=1517&auto=format&fit=crop",
    category: "Electronics",
    tags: ["smart home", "technology", "IoT"],
    rating: 4.6,
    stock: 20,
    featured: true
  },
  {
    id: "4",
    name: "Minimalist Desk Lamp",
    description: "Add a touch of elegance to your workspace with this sleek, minimalist desk lamp.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1538035323718-641906c866de?q=80&w=1587&auto=format&fit=crop",
    category: "Home Decor",
    tags: ["lamp", "office", "decor"],
    rating: 4.5,
    stock: 30,
    featured: false
  },
  {
    id: "5",
    name: "Urban Backpack",
    description: "A durable, water-resistant backpack perfect for your daily commute or weekend adventures.",
    price: 89.99,
    discountPrice: 69.99,
    image: "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?q=80&w=1470&auto=format&fit=crop",
    category: "Accessories",
    tags: ["backpack", "travel", "outdoor"],
    rating: 4.7,
    stock: 25,
    featured: true
  },
  {
    id: "6",
    name: "Wireless Earbuds",
    description: "Experience crystal clear sound without the hassle of wires. These comfortable earbuds provide up to 8 hours of playback.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1606741965740-5f44c726ba8b?q=80&w=1587&auto=format&fit=crop",
    category: "Electronics",
    tags: ["earbuds", "audio", "wireless"],
    rating: 4.4,
    stock: 18,
    featured: false
  },
  {
    id: "7",
    name: "Geometric Wall Art",
    description: "Add a modern touch to your living space with this stunning geometric wall art piece.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1470&auto=format&fit=crop",
    category: "Home Decor",
    tags: ["art", "wall decor", "modern"],
    rating: 4.3,
    stock: 12,
    featured: false
  },
  {
    id: "8",
    name: "Cotton Lounge Set",
    description: "Relax in style with this super soft cotton lounge set. Perfect for home workouts or lazy weekends.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1558&auto=format&fit=crop",
    category: "Apparel",
    tags: ["loungewear", "comfortable", "home"],
    rating: 4.7,
    stock: 22,
    featured: false
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  const category = categories.find(cat => cat.id === categoryId);
  if (!category) return [];
  return products.filter(product => product.category === category.name);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
