import s from './ShppingCart.module.scss';
import Form from '../../components/Form/Form';
import GoodsList from '../../components/CartList/CartList';
import FooterCart from '../../components/CartFooter/CartFooter';

const ShoppingCart = () => {
  return (
    <div className={s.shoppingCart}>
      <div className={s.main}>
        <Form />
        <GoodsList />
      </div>
      <FooterCart />
    </div>
  );
};
export default ShoppingCart;
