import s from './TotalCount.module.scss';
import { useAppSelector } from '../../app/hooks';

const TotalCount = () => {
  const totalPrice = useAppSelector((state) =>
    state.store.cart.reduce((total, product) => total + product.amount * product.info.price, 0)
  );
  return <div className={s.totalCount}>Total price: {totalPrice}</div>;
};

export default TotalCount;
