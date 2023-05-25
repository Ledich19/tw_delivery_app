import { Outlet, useParams } from 'react-router-dom';
import s from './Shop.module.scss';
import Shops from '../../components/Shops/Shops';
import ShopSpice from '../../components/ShopSpice/ShopSpice';
import { useGetShopsQuery } from '../../services/shopApi';
import { GoodsType } from '../../app/types';

const Shop = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetShopsQuery('');

  console.log(data);

  const dataArr = data || [];
  const products: GoodsType[] = id
    ? dataArr.find((shop) => shop.id === id)?.products ?? []
    : dataArr.reduce((goodsArr, shop) => goodsArr.concat(shop.products), [] as GoodsType[]);

  return (
    <div className={s.shop}>
      <Shops shops={dataArr.map((shop) => ({ id: shop.id, name: shop.name }))} />
      <ShopSpice products={products} isLoading={isLoading} />
    </div>
  );
};

export default Shop;
