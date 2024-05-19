export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

export type CartItem = Item & { count: number };

export interface User {
  id: string;
  name: string;
}
