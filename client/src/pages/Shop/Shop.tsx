import { Outlet, useParams } from 'react-router-dom';
import s from './Shop.module.scss';
import Shops from '../../components/Shops/Shops';
import ShopSpice from '../../components/ShopSpice/ShopSpice';
import { useGetShopsQuery } from '../../services/shopApi';
import { ProductsType } from '../../app/types';

const Shop = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetShopsQuery('');

  const dataArr = data || [];
  const products: ProductsType[] = id
    ? dataArr.find((shop) => shop.id === id)?.products ?? []
    : dataArr.reduce(
        (productsArr, shop) => productsArr.concat(shop.products),
        [] as ProductsType[]
      );

  return (
    <div className={s.shop}>
      <Shops shops={dataArr.map((shop) => ({ id: shop.id, name: shop.name }))} />
      <ShopSpice products={products} isLoading={isLoading} />
    </div>
  );
};

export default Shop;
