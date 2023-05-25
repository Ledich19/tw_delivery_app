import s from './ShppingCart.module.scss';
import CartList from '../../components/CartList/CartList';
import Form from '../../components/Form/Form';
import FooterCart from '../../components/CartFooter/CartFooter';

const ShoppingCart = () => {
  return (
    <div className={s.shoppingCart}>
      <div className={s.main}>
        <Form />
        <CartList />
      </div>
      <FooterCart />
    </div>
  );
};
export default ShoppingCart;
