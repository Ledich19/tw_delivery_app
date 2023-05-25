import { useParams } from 'react-router-dom';
import s from './Shop.module.scss';
import Shops from '../../components/Shops/Shops';
import ShopSpice from '../../components/ShopSpice/ShopSpice';
import { useGetShopsQuery } from '../../services/shopApi';
import { ProductsType } from '../../app/types';
import { useAppSelector } from '../../app/hooks';

const Shop = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetShopsQuery('');
  const shopInCart = useAppSelector((state) => state.store.cart[0]?.info.shopId || null);

  const dataArr = data || [];
  const products: ProductsType[] = id
    ? dataArr.find((shop) => shop.id === id)?.products ?? []
    : dataArr
        .reduce((productsArr, shop) => productsArr.concat(shop.products), [] as ProductsType[])
        .filter((product) => (shopInCart ? product.shopId === shopInCart : product.shopId));

  return (
    <div className={s.shop}>
      <Shops
        shops={dataArr.map((shop) => ({
          id: shop.id,
          name: shop.name,
          isDisabled: shopInCart ? shop.id !== shopInCart : false,
        }))}
      />
      <ShopSpice products={products} isLoading={isLoading} />
    </div>
  );
};

export default Shop;
