import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storeReducer from '../reducers/storeReducer';
import formReducer from '../reducers/formReducer';
import { listenerMiddleware, reHydrateStore } from './localStorage';
import { shopApi } from '../services/shopApi';

export const store = configureStore({
  reducer: {
    store: storeReducer,
    form: formReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },

  preloadedState: {
    store: {
      cart: reHydrateStore() || [],
      isSuccess: false,
      isError: null,
    },
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
