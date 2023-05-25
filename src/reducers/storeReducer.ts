import { createSlice } from '@reduxjs/toolkit';
import { CartItemType, GoodsType, ShopType } from '../app/types';

type InitialState = {
  shops: ShopType[];
  cart: CartItemType[];
  isValid: boolean;
  activeShop: string;
};
type AddProductAction = {
  payload: GoodsType;
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
type ChangeIsValidAction = {
  payload: boolean;
  type: string;
};
const initialState: InitialState = {
  shops: [
    {
      id: '1',
      name: 'MC donny',
      goods: [
        {
          price: 10,
          id: '1',
          name: 'name',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '2',
          name: 'name',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '3',
          name: 'name',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '4',
          name: 'name',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
      ],
    },
    {
      id: '2',
      name: 'CFK',
      goods: [
        {
          price: 10,
          id: '12',
          name: 'name1fffffffff fdghg hgjhghj g jhjk',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '22',
          name: 'name2',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '32',
          name: 'name3',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '42',
          name: 'name4',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
      ],
    },
    {
      id: '3',
      name: 'EBY',
      goods: [
        {
          price: 10,
          id: '13',
          name: 'name2',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '23',
          name: 'name2',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '33',
          name: 'name2',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '43',
          name: 'name2',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
      ],
    },
    {
      id: '4',
      name: 'Rozetka',
      goods: [
        {
          price: 10,
          id: '14',
          name: 'name3',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '24',
          name: 'name3',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '34',
          name: 'name3',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '44',
          name: 'name3',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
      ],
    },
    {
      id: '5',
      name: 'Prom',
      goods: [
        {
          price: 10,
          id: '15',
          name: 'name5',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '25',
          name: 'name5',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '35',
          name: 'name5',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          price: 10,
          id: '45',
          name: 'name5',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
      ],
    },
  ],
  cart: [
    {
      info: {
        price: 10,
        name: 'name',
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',

        id: '1',
      },
      amount: 1,
    },
    {
      info: {
        price: 10,
        name: 'name name name  name name name name name name name name name name',
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',

        id: '22',
      },
      amount: 5,
    },
    {
      info: {
        price: 10,
        name: 'name',
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',

        id: '5',
      },
      amount: 3,
    },
    {
      info: {
        price: 10,
        name: 'name',
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',

        id: '34',
      },
      amount: 2,
    },
    {
      info: {
        price: 10,
        name: 'name',
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',

        id: '44',
      },
      amount: 1,
    },
  ],
  isValid: false,
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
    changeIsValid(state, action: ChangeIsValidAction) {
      return {
        ...state,
        isValid: action.payload,
      };
    },
  },
});

export const { addProduct, changeAmount, removeProductFromCart, changeIsValid } =
  storeSlice.actions;
export default storeSlice.reducer;
