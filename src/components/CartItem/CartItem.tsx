import { AiOutlineClose } from 'react-icons/ai';
import { useAppDispatch } from '../../app/hooks';
import { CartItemType } from '../../app/types';
import { changeAmount, removeProductFromCart } from '../../reducers/storeReducer';
import s from './CartItem.module.scss';

type Props = {
  product: CartItemType;
};

const CartItem = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeAmount({ id: product.info.id, value: parseInt(e.target.value, 10) }));
  };
  const handleDelete = () => {
    dispatch(removeProductFromCart(product.info.id));
  };

  return (
    <div className={s.product}>
      <div className={s.image}>
        <img src={product.info.photo} alt={product.info.name} />
      </div>
      <div className={s.info}>
        <button type="button" onClick={handleDelete} className={s.delete}>
          <AiOutlineClose />
        </button>
        <div className={s.textWrap}>
          <div className={s.text}>
            <div className={s.name}>{product.info.name}</div>
            <div className={s.price}> {product.info.price * product.amount}</div>
          </div>
        </div>
        <input className={s.amount} onChange={handleAmount} type="number" value={product.amount} />
      </div>
    </div>
  );
};

export default CartItem;
