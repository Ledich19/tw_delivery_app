import SubmitBtn from '../SubmitBtn/SubmitBtn';
import style from './CartFooter.module.scss';

const CartFooter = () => {
  return (
    <div className={style.CartFooter}>
      <SubmitBtn />
    </div>
  );
};

export default CartFooter;
