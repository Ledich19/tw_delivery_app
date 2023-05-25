import SubmitBtn from '../SubmitBtn/SubmitBtn';
import TotalCount from '../TotalCount/TotalCount';
import style from './CartFooter.module.scss';

const CartFooter = () => {
  return (
    <div className={style.cartFooter}>
      <TotalCount />
      <SubmitBtn />
    </div>
  );
};

export default CartFooter;
