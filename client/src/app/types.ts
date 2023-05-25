export type ProductsType = {
  id: string;
  name: string;
  photo: string;
  price: number;
  shopId: string;
};

export type ShopType = {
  id: string;
  name: string;
  products: ProductsType[];
};
export type CartItemType = {
  info: ProductsType;
  amount: number;
};
export type FormType = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type OrderType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  order: CartItemType[];
};

export type ValidationType = {
  isEmpty: boolean;
  minLength: number;
  reGex?: {
    value: RegExp;
    text: string;
  };
};
