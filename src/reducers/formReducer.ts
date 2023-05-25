import { createSlice } from '@reduxjs/toolkit';
import { FormType } from '../app/types';

type InitialState = {
  formData: FormType;
  isValid: boolean;
};
type SetFormDataAction = {
  payload: {
    formData: FormType;
    isValid: boolean;
  };
  type: string;
};

const initialState: InitialState = {
  formData: {
    name: '',
    email: '',
    phone: '',
    address: '',
  },
  isValid: true,
};

const formSlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    setFormData(state, action: SetFormDataAction) {
      return {
        ...state,
        formData: action.payload.formData,
        isValid: action.payload.isValid,
      };
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
