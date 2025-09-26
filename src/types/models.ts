export interface User {
  user_id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}

export interface Order {
  order_id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  order_date: string;
  status: string;
}