import React from 'react';
import s from './Product.module.scss';
import { GoodsType } from '../../app/types';

const Product = ({ good }: { good: GoodsType }) => {
  return <div className={s.product}>{good.name}</div>;
};

export default Product;
