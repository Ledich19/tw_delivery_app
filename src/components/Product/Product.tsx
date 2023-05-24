import s from './Product.module.scss';
import { GoodsType } from '../../app/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addProduct } from '../../reducers/storeReducer';

const Product = ({ product }: { product: GoodsType }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((store) => store.store.cart);

  const addToCardHandler = () => {
    dispatch(addProduct(product.id));
    console.log(cart);
  };

  return (
    <div className={s.product}>
      <div className={s.image}>
        <img src={product.photo} alt={product.name} />
      </div>
      <div className={s.name}>{product.name}</div>
      <button onClick={addToCardHandler} type="button" className={s.button}>
        add to card
      </button>
    </div>
  );
};

export default Product;
