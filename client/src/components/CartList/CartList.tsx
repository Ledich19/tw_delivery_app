import { useAppSelector } from '../../app/hooks';
import CartItem from '../CartItem/CartItem';
import style from './CartList.module.scss';

const CartList = () => {
  const { cart, isSuccess, isError } = useAppSelector((state) => state.store);

  return (
    <div className={style.cartList}>
      {isSuccess && <div>Order successfully completed</div>}
      {isError && <div>isError</div>}
      {cart.map((product) => (
        <CartItem key={product.info.id} product={product} />
      ))}
    </div>
  );
};

export default CartList;
