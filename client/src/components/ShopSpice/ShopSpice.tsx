import { useParams } from 'react-router-dom';
import s from './ShopSpice.module.scss';
import { useAppSelector } from '../../app/hooks';
import { GoodsType } from '../../app/types';
import Product from '../Product/Product';

type Props = {
  products: GoodsType[];
  isLoading: boolean;
};

const ShopSpice = ({ products, isLoading }: Props) => {
  return (
    <div className={s.shopSpice}>
      {isLoading ? (
        <div className={s.loading}>...loading</div>
      ) : (
        products.map((product) => <Product key={product.id} product={product} />)
      )}
    </div>
  );
};

export default ShopSpice;
