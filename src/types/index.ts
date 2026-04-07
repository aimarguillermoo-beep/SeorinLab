export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image?: string;
  gallery?: string[];
  description?: string;
  idealFor?: string;
  bgColor?: string;
  bottleColor?: string;
  leafColor?: string;
  title1?: string;
  title2?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
