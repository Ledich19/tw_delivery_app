import { createSlice } from '@reduxjs/toolkit';
import { ShopType } from '../app/types';

type InitialState = {
  shops: ShopType[];
};

const initialState: InitialState = {
  shops: [
    {
      id: '1',
      name: 'MC donny',
      goods: [],
    },
    {
      id: '2',
      name: 'CFK',
      goods: [],
    },
    {
      id: '3',
      name: 'EBY',
      goods: [],
    },
    {
      id: '4',
      name: 'Rozetka',
      goods: [],
    },
    {
      id: '5',
      name: 'Prom',
      goods: [],
    },
  ],
};

const storeSlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    setStore(state, action) {},
  },
});

export const { setStore } = storeSlice.actions;
export default storeSlice.reducer;
