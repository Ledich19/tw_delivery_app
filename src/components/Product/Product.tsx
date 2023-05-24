import s from './Product.module.scss';
import { GoodsType } from '../../app/types';

const Product = ({ good }: { good: GoodsType }) => {
  return (
    <div className={s.product}>
      <div className={s.image}>
        <img src={good.photo} alt={good.name} />
      </div>
      <div className={s.name}>{good.name}</div>
      <button type="button" className={s.button}>
        add to card
      </button>
    </div>
  );
};

export default Product;
