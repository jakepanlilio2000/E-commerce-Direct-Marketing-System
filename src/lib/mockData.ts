export interface Product {
  id: number;
  name: string;
  category: 'Groceries' | 'Snacks' | 'Prepared Meal';
  price: number;
  description: string;
  imagePath: string; 
  targetAudience: Array<'Individuals' | 'Parents' | 'Groceries'>;
  callToAction: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Premium Whole-Grain Oatmeal',
    category: 'Groceries',
    price: 4.99,
    description: 'The perfect healthy start for busy mornings. Rich in fiber and quick to prepare.',
    imagePath: '/images/product-mock-1.jpg',
    targetAudience: ['Parents', 'Individuals'],
    callToAction: '🛒 Order Now for a Healthy Family!',
  },
  {
    id: 2,
    name: 'Family-Size Frozen Lasagna',
    category: 'Prepared Meal',
    price: 18.50,
    description: 'A convenient, high-quality dinner solution for a family of four. Ready in minutes.',
    imagePath: '/images/product-mock-2.jpg',
    targetAudience: ['Parents', 'Groceries'],
    callToAction: '🍽️ Add to Cart & Simplify Dinner!',
  },
  {
    id: 3,
    name: 'Organic Apricot Yogurt',
    category: 'Snacks',
    price: 2.50,
    description: 'A light and delicious snack, great for lunchboxes or a quick energy boost.',
    imagePath: '/images/product-mock-3.jpg',
    targetAudience: ['Individuals'],
    callToAction: '😋 Grab Your Snack Today!',
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
    description: 'Get 15% off your first order when you sign up for our newsletter!',
    type: 'Coupon',
    details: 'Use code: MHARTHEA15 at checkout.',
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
