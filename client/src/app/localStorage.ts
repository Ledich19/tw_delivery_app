import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import {
  addProduct,
  removeProductFromCart,
  changeAmount,
  cleanCart,
} from '../reducers/storeReducer';
// eslint-disable-next-line import/no-cycle
import { RootState } from './store';

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(addProduct, removeProductFromCart, changeAmount, cleanCart),
  effect: (_, listenerApi) =>
    localStorage.setItem(
      'delivery-app/cart',
      JSON.stringify((listenerApi.getState() as RootState).store.cart)
    ),
});

export const reHydrateStore = () => {
  const cartData = localStorage.getItem('delivery-app/cart');
  if (cartData !== null) {
    const parsedCart = JSON.parse(cartData);
    return parsedCart;
  }
  return null;
};
