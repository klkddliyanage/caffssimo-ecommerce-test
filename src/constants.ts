import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ethiopia Yirgacheffe',
    price: 24.00,
    roastLevel: 'Light',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    description: 'A delicate and floral coffee with notes of jasmine, lemon, and peach. Grown in the high altitudes of the Yirgacheffe region.',
    flavorNotes: ['Jasmine', 'Lemon', 'Peach'],
    origin: 'Ethiopia',
    intensity: 2,
  },
  {
    id: '2',
    name: 'Colombia Huila',
    price: 22.00,
    roastLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
    description: 'Balanced and sweet with a rich chocolate body and subtle nutty undertones. A classic morning brew.',
    flavorNotes: ['Chocolate', 'Caramel', 'Walnut'],
    origin: 'Colombia',
    intensity: 3,
  },
  {
    id: '3',
    name: 'Sumatra Mandheling',
    price: 26.00,
    roastLevel: 'Dark',
    image: 'https://images.unsplash.com/photo-1497933322477-911f93bb7867?auto=format&fit=crop&q=80&w=800',
    description: 'Earthy and bold with low acidity and a heavy body. Notes of cedar, spice, and dark chocolate.',
    flavorNotes: ['Cedar', 'Tobacco', 'Dark Chocolate'],
    origin: 'Indonesia',
    intensity: 5,
  },
  {
    id: '4',
    name: 'Guatemala Antigua',
    price: 23.00,
    roastLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
    description: 'Spicy and smoky with a hint of cocoa. Grown in volcanic soil for a unique complex flavor profile.',
    flavorNotes: ['Smoke', 'Cocoa', 'Apple'],
    origin: 'Guatemala',
    intensity: 3,
  },
  {
    id: '5',
    name: 'Brazil Santos',
    price: 19.00,
    roastLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1524350300373-29d9c0a47a58?auto=format&fit=crop&q=80&w=800',
    description: 'Smooth and mild with a nutty sweetness. Perfect for espresso bases or a clean drip coffee.',
    flavorNotes: ['Peanut', 'Milk Chocolate', 'Malt'],
    origin: 'Brazil',
    intensity: 3,
  },
  {
    id: '6',
    name: 'Kenya AA',
    price: 28.00,
    roastLevel: 'Light',
    image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=80&w=800',
    description: 'Bright and winey with a sharp acidity. Intense berry flavors and a clean finish.',
    flavorNotes: ['Blackcurrant', 'Grapefruit', 'Wine'],
    origin: 'Kenya',
    intensity: 2,
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Coffee Enthusiast',
    content: 'The Ethiopia Yirgacheffe is hands down the best light roast I have ever tasted. The floral notes are incredible.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Home Barista',
    content: 'Caffasimo has completely changed my morning routine. The freshness of the beans is unmatched.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Cafe Owner',
    content: 'We started serving Caffasimo in our shop last month and our customers can\'t get enough of the Colombia Huila.',
    rating: 5,
  }
];

export const GRIND_TYPES = [
  'Whole Bean',
  'Espresso',
  'Drip',
  'French Press',
  'Cold Brew'
];
