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
  address: {
    display_name: string;
    osm_id: number;
    lat: string;
    lon: string;
  };
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
  order: CartItemType[] | null;
};

export type ValidationType = {
  isEmpty: boolean;
  minLength: number;
  reGex?: {
    value: RegExp;
    text: string;
  };
};

export type Place = {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  boundingbox: string[];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
  address: {
    house_number: string;
    road: string;
    hamlet: string;
    town: string;
    village: string;
    city: string;
    'ISO3166-2-lvl8': string;
    state_district: string;
    state: string;
    'ISO3166-2-lvl4': string;
    postcode: string;
    country: string;
    country_code: string;
  };
};
