import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ethiopia Yirgacheffe',
    price: 24.00,
    roastLevel: 'Light',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1587049352847-8d4e8941554a?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1620189507195-68309c04c4d0?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e8941554a?auto=format&fit=crop&q=80&w=800',
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
