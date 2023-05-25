import { createSlice } from '@reduxjs/toolkit';
import { CartItemType, ProductsType } from '../app/types';

type InitialState = {
  cart: CartItemType[];
  activeShop: string;
  isSuccess: boolean;
  isError: null | string;
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
  isSuccess: false,
  isError: null,
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
    cleanCart(state) {
      return {
        ...state,
        cart: [],
      };
    },
    setIsSuccess(state, action) {
      return {
        ...state,
        isSuccess: action.payload,
      };
    },
    setIsError(state, action) {
      return {
        ...state,
        setIsError: action.payload,
      };
    },
  },
});

export const {
  addProduct,
  changeAmount,
  removeProductFromCart,
  cleanCart,
  setIsSuccess,
  setIsError,
} = storeSlice.actions;
export default storeSlice.reducer;
