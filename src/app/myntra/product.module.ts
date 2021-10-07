export interface Product {
  id: number,
  name: string;
  type: string;
  price: number;
  imgPath: string;
  images: string[];
  oldPrice: number;
  offer: string;
  wishlist: boolean;
  cart: boolean;
}
