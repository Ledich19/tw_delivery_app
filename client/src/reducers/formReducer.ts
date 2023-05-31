import { createSlice } from '@reduxjs/toolkit';
import { FormType } from '../app/types';

type InitialState = {
  formData: FormType;
  isValid: boolean;
};
type SetFormDataAction = {
  payload: {
    formData: {
      name: string;
      email: string;
      phone: string;
    };
    isValid: boolean;
  };
  type: string;
};
type SetAddressDataAction = {
  payload: string;
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
        formData: { ...action.payload.formData, address: state.formData.address },
        isValid: action.payload.isValid,
      };
    },
    setAddress(state, action: SetAddressDataAction) {
      return {
        ...state,
        formData: { ...state.formData, address: action.payload },
      };
    },
  },
});

export const { setFormData, setAddress } = formSlice.actions;
export default formSlice.reducer;
