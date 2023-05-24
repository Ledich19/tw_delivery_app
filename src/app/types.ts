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
