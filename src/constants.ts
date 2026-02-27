import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ethiopia Yirgacheffe',
    price: 24.00,
    roastLevel: 'Light',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
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

// Replace with your actual delivery page URLs
export const DOORDASH_URL = 'https://www.doordash.com/store/your-caffasimo-store/';
export const UBER_EATS_URL = 'https://www.ubereats.com/store/your-caffasimo-store/';

export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  openingHours: string;
  phone: string;
  mapUrl?: string;
  /** Optional image URL for the branch section (e.g. cafe interior). */
  image?: string;
  /** Latitude for map marker. */
  lat: number;
  /** Longitude for map marker. */
  lng: number;
}

/**
 * One map showing all branches. Create a Google My Map with all branch pins at
 * https://www.google.com/maps/d/ then Share → Embed map and paste the iframe src here.
 */
export const ALL_BRANCHES_MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.02859375!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890';

// Replace with your real franchise branch data
export const BRANCHES: Branch[] = [
  {
    id: 'downtown',
    name: 'Caffasimo Downtown',
    address: '123 Main Street',
    city: 'San Francisco, CA',
    openingHours: 'Mon–Fri 7:00 AM – 7:00 PM, Sat–Sun 8:00 AM – 6:00 PM',
    phone: '(415) 555-0100',
    mapUrl: 'https://maps.google.com/?q=123+Main+Street+San+Francisco',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200',
    lat: 37.7849,
    lng: -122.4094,
  },
  {
    id: 'harbor',
    name: 'Caffasimo Harbor View',
    address: '456 Harbor Drive',
    city: 'San Francisco, CA',
    openingHours: 'Daily 6:30 AM – 8:00 PM',
    phone: '(415) 555-0101',
    mapUrl: 'https://maps.google.com/?q=456+Harbor+Drive+San+Francisco',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1200',
    lat: 37.7812,
    lng: -122.3935,
  },
  {
    id: 'heights',
    name: 'Caffasimo The Heights',
    address: '789 Oak Avenue',
    city: 'Oakland, CA',
    openingHours: 'Mon–Sat 7:00 AM – 6:00 PM, Sun 8:00 AM – 4:00 PM',
    phone: '(510) 555-0102',
    mapUrl: 'https://maps.google.com/?q=789+Oak+Avenue+Oakland',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1200',
    lat: 37.8044,
    lng: -122.2712,
  },
];

/**
 * Contact and business details. Replace with your real information.
 * Used by Contact page and can be reused for footer, Branches modal, etc.
 */
export interface ContactInfo {
  companyName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode?: string;
  openingHours?: string;
  social?: { label: string; url: string }[];
}

export const CONTACT_INFO: ContactInfo = {
  companyName: 'Caffasimo',
  email: 'hello@caffasimo.com',
  phone: '(415) 555-0100',
  address: '123 Main Street',
  city: 'San Francisco, CA',
  postalCode: '94102',
  openingHours: 'Mon–Fri 8:00 AM – 6:00 PM',
  social: [
    { label: 'Instagram', url: 'https://instagram.com/caffasimo' },
    { label: 'Facebook', url: 'https://facebook.com/caffasimo' },
  ],
};
