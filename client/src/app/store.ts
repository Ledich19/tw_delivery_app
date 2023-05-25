import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storeReducer from '../reducers/storeReducer';
import formReducer from '../reducers/formReducer';
import { shopApi } from '../services/shopApi';

export const store = configureStore({
  reducer: {
    store: storeReducer,
    form: formReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
