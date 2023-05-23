import { createSlice } from '@reduxjs/toolkit';

const initialState = { type: '', text: '' };

const storeSlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    setStore(state, action) {},
  },
});

export const { setStore } = storeSlice.actions;
export default storeSlice.reducer;
