import { createSlice } from '@reduxjs/toolkit';
import { FormType, Place } from '../app/types';

type InitialState = {
  selectPosition: Place | null;
};
type SetSelectPosition = {
  payload: Place;
  type: string;
};

const initialState: InitialState = {
  selectPosition: null,
};

const mapsSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    setSelectPosition(state, action: SetSelectPosition) {
      return {
        ...state,
        selectPosition: action.payload,
      };
    },
  },
});

export const { setSelectPosition } = mapsSlice.actions;
export default mapsSlice.reducer;
