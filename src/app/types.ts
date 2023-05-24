export type GoodsType = {
  id: string;
  name: string;
  photo: string;
};
export type ShopType = {
  id: string;
  name: string;
  goods: GoodsType[];
};
export type CartItemType = {
  id: string;
  amount: number;
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
