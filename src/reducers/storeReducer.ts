import { createSlice } from '@reduxjs/toolkit';
import { CartItemType, ShopType } from '../app/types';

type InitialState = {
  shops: ShopType[];
  cart: CartItemType[];
  activeShop: string;
};
type Action = {
  payload: string;
  type: string;
};

const initialState: InitialState = {
  shops: [
    {
      id: '1',
      name: 'MC donny',
      goods: [
        {
          id: '1',
          name: 'name',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          id: '2',
          name: 'name',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          id: '3',
          name: 'name',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
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
          id: '12',
          name: 'name1fffffffff fdghg hgjhghj g jhjk',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          id: '22',
          name: 'name2',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          id: '32',
          name: 'name3',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
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
          id: '13',
          name: 'name2',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          id: '23',
          name: 'name2',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          id: '33',
          name: 'name2',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
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
          id: '14',
          name: 'name3',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          id: '24',
          name: 'name3',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          id: '34',
          name: 'name3',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
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
          id: '15',
          name: 'name5',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          id: '25',
          name: 'name5',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
          id: '35',
          name: 'name5',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_bMcXquKCV2p3r5Vyc2OWtvvRE8AZMq8rA&usqp=CAU',
        },
        {
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
      id: '1',
      amount: 1,
    },
    {
      id: '22',
      amount: 5,
    },
    {
      id: '5',
      amount: 3,
    },
    {
      id: '34',
      amount: 2,
    },
    {
      id: '44',
      amount: 1,
    },
  ],
  activeShop: '',
};

const storeSlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    addProduct(state, action: Action) {
      const isProduct = state.cart.find((product) => action.payload === product.id);
      if (isProduct) {
        const newCart = state.cart.map((product) => {
          if (isProduct.id === product.id) {
            return { ...product, amount: product.amount + 1 };
          }
          return product;
        });
        return { ...state, cart: newCart };
      }
      return { ...state, cart: state.cart.concat({ id: action.payload, amount: 1 }) };
    },
  },
});

export const { addProduct } = storeSlice.actions;
export default storeSlice.reducer;
