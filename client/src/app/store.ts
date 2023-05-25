import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storeReducer from '../reducers/storeReducer';
import formReducer from '../reducers/formReducer';

export const store = configureStore({
  reducer: {
    store: storeReducer,
    form: formReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
