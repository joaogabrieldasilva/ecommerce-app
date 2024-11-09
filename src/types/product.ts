export type Product = {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  price: number;
  rate: number;
  reviewCount: number;
  description: string;
};

export type CartProduct = Product & { quantity: number };
