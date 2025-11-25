export interface Product {
  id: number;
  name: string;
  category: 'Groceries' | 'Snacks' | 'Prepared Meal' | 'Beverages';
  price: number;
  description: string;
  imagePath: string;
  targetAudience: ('Individuals' | 'Parents' | 'Groceries')[];
  callToAction: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Premium Whole-Grain Oatmeal (1kg)',
    category: 'Groceries',
    price: 275.0,
    description: 'The perfect healthy start for busy mornings. Rich in fiber and quick to prepare.',
    imagePath: '/images/product-mock-1.jpg',
    targetAudience: ['Parents', 'Individuals'],
    callToAction: '🛒 Order Now for a Healthy Family!',
  },
  {
    id: 2,
    name: 'Family-Size Frozen Beef Lasagna',
    category: 'Prepared Meal',
    price: 1020.0,
    description: 'A convenient, high-quality dinner solution for a family of four. Ready in minutes.',
    imagePath: '/images/product-mock-2.jpg',
    targetAudience: ['Parents', 'Groceries'],
    callToAction: '🍽️ Add to Cart & Simplify Dinner!',
  },
  {
    id: 3,
    name: 'Organic Apricot Yogurt (6-Pack)',
    category: 'Snacks',
    price: 140.0,
    description: 'A light and delicious snack, great for lunchboxes or a quick energy boost.',
    imagePath: '/images/product-mock-3.jpg',
    targetAudience: ['Individuals'],
    callToAction: '😋 Grab Your Snack Today!',
  },
  {
    id: 4,
    name: 'Gourmet Philippine Blend Coffee',
    category: 'Beverages',
    price: 495.0,
    description: 'Medium roast, locally sourced beans for the perfect morning kick.',
    imagePath: '/images/product-mock-4.jpg',
    targetAudience: ['Individuals', 'Groceries'],
    callToAction: '☕ Brew Your Perfect Cup!',
  },
  {
    id: 5,
    name: 'Ready-to-Eat Chicken Adobo',
    category: 'Prepared Meal',
    price: 195.0,
    description: 'Classic Filipino Adobo, quick-frozen for convenience and authentic taste.',
    imagePath: '/images/product-mock-5.jpg',
    targetAudience: ['Individuals'],
    callToAction: '🍚 Buy Adobo Now!',
  },
  {
    id: 6,
    name: 'Premium Local White Rice (5kg)',
    category: 'Groceries',
    price: 320.0,
    description: 'High-quality, polished white rice, a staple for every Filipino home.',
    imagePath: '/images/product-mock-6.jpg',
    targetAudience: ['Parents', 'Groceries'],
    callToAction: '🌾 Stock Up Your Pantry!',
  },
];

export interface Promotion {
  title: string;
  description: string;
  type: 'Discount' | 'Coupon' | 'Membership';
  details: string;
  callToAction: string;
}

export const MOCK_PROMOTIONS: Promotion[] = [
  {
    title: 'New Customer Welcome',
    description: 'Get ₱50 off your first order when you sign up for our newsletter!',
    type: 'Coupon',
    details: 'Use code: MHARTHEA50 at checkout.',
    callToAction: 'Sign Up and Save Today!',
  },
  {
    title: 'Parents’ Bulk Buy Discount',
    description: 'Buy 3 or more Prepared Meals (e.g., Lasagna), get 10% off the total.',
    type: 'Discount',
    details: 'Automatically applied at checkout.',
    callToAction: 'View Prepared Meals!',
  },
  {
    title: 'MHARTHEA Gold Membership',
    description: 'Unlock 5% permanent discount on all groceries and receive monthly recipe e-mails.',
    type: 'Membership',
    details: 'Free sign-up required (check your account settings).',
    callToAction: 'Join the Gold Club!',
  },
];
