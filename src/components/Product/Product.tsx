import React from 'react';
import style from './Product.module.scss';
import { GoodsType } from '../../app/types';

const Product = ({ good }: { good: GoodsType }) => {
  return <div className={style.product}>{good.name}</div>;
};

export default Product;
