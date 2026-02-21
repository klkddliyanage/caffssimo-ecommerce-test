export type RoastLevel = 'Light' | 'Medium' | 'Dark';

export interface Product {
  id: string;
  name: string;
  price: number;
  roastLevel: RoastLevel;
  image: string;
  description: string;
  flavorNotes: string[];
  origin: string;
  intensity: number; // 1-5
}

export interface CartItem extends Product {
  quantity: number;
  grindType: string;
}

export type View = 'home' | 'shop' | 'product' | 'checkout';
