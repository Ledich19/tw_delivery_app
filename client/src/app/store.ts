import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { listenerMiddleware, reHydrateStore } from './localStorage';
import storeReducer from '../reducers/storeReducer';
import formReducer from '../reducers/formReducer';
import { shopApi } from '../services/shopApi';
import { mapApi } from '../services/mapApi';
import mapsReducer from '../reducers/mapsReducer';

export const store = configureStore({
  reducer: {
    store: storeReducer,
    form: formReducer,
    maps: mapsReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [mapApi.reducerPath]: mapApi.reducer,
  },

  preloadedState: {
    store: {
      cart: reHydrateStore() || [],
      isSuccess: false,
      isError: null,
    },
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shopApi.middleware,
      mapApi.middleware,
      listenerMiddleware.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
