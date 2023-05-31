import { createSlice } from '@reduxjs/toolkit';
import { Place } from '../app/types';

type InitialState = {
  selectPosition: Place | null;
  searchText: string;
};
type SetSelectPosition = {
  payload: Place;
  type: string;
};
type SetSearchText = {
  payload: string;
  type: string;
};

const initialState: InitialState = {
  searchText: '',
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
    setSearchText(state, action: SetSearchText) {
      return {
        ...state,
        searchText: action.payload,
      };
    },
  },
});

export const { setSelectPosition, setSearchText } = mapsSlice.actions;
export default mapsSlice.reducer;
