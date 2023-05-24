import React from 'react';
import { useParams } from 'react-router-dom';
import s from './ShopSpice.module.scss';
import { useAppSelector } from '../../app/hooks';
import { GoodsType } from '../../app/types';
import Product from '../Product/Product';

const ShopSpice = () => {
  const { id } = useParams();
  const { shops } = useAppSelector((store) => store.store);
  const goods: GoodsType[] =
    id && shops
      ? shops.find((shop) => shop.id === id)?.goods ?? []
      : shops.reduce((goodsArr, shop) => goodsArr.concat(shop.goods), [] as GoodsType[]);

  return (
    <div className={s.shopSpice}>
      {goods.map((good) => (
        <Product key={good.id} good={good} />
      ))}
    </div>
  );
};

export default ShopSpice;
