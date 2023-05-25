import { useAppSelector } from '../../app/hooks';
import CartItem from '../CartItem/CartItem';
import style from './CartList.module.scss';

const CartList = () => {
  const { shops } = useAppSelector((state) => state.store);

  return (
    <div className={style.cartList}>
      <CartItem />
    </div>
  );
};

export default CartList;
