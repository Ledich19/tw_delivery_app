import s from './Product.module.scss';
import { ProductsType } from '../../app/types';
import { useAppDispatch } from '../../app/hooks';
import { addProduct } from '../../reducers/storeReducer';

const Product = ({ product }: { product: ProductsType }) => {
  const dispatch = useAppDispatch();

  const addToCardHandler = () => {
    dispatch(addProduct(product));
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
