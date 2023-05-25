import { useAppSelector } from '../../app/hooks';
import CartItem from '../CartItem/CartItem';
import style from './CartList.module.scss';

const CartList = () => {
  const { cart } = useAppSelector((state) => state.store);

  return (
    <div className={style.cartList}>
      {cart.map((product) => (
        <CartItem key={product.info.id} product={product} />
      ))}
    </div>
  );
};

export default CartList;
