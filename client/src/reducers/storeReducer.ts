import { createSlice } from '@reduxjs/toolkit';
import { CartItemType, ProductsType } from '../app/types';

type InitialState = {
  cart: CartItemType[];
  activeShop: string;
};
type AddProductAction = {
  payload: ProductsType;
  type: string;
};

type ChangeAmountAction = {
  payload: {
    id: string;
    value: number;
  };
  type: string;
};
type RemoveProductFromCartAction = {
  payload: string;
  type: string;
};

const initialState: InitialState = {
  cart: [],
  activeShop: '',
};

const storeSlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    addProduct(state, action: AddProductAction) {
      const isProduct = state.cart.find((product) => action.payload.id === product.info.id);
      if (isProduct) {
        const newCart = state.cart.map((product) => {
          if (isProduct.info.id === product.info.id) {
            return { ...product, amount: product.amount + 1 };
          }
          return product;
        });
        return { ...state, cart: newCart };
      }
      return { ...state, cart: state.cart.concat({ info: action.payload, amount: 1 }) };
    },
    changeAmount(state, action: ChangeAmountAction) {
      if (action.payload.value < 1) {
        return {
          ...state,
          cart: state.cart.filter((product) => product.info.id !== action.payload.id),
        };
      }

      return {
        ...state,
        cart: state.cart.map((product) => {
          if (action.payload.id === product.info.id) {
            return { ...product, amount: action.payload.value };
          }
          return product;
        }),
      };
    },
    removeProductFromCart(state, action: RemoveProductFromCartAction) {
      return {
        ...state,
        cart: state.cart.filter((product) => product.info.id !== action.payload),
      };
    },
  },
});

export const { addProduct, changeAmount, removeProductFromCart } = storeSlice.actions;
export default storeSlice.reducer;
