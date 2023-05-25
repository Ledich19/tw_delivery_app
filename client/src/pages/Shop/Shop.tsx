import { Outlet } from 'react-router-dom';
import s from './Shop.module.scss';
import Shops from '../../components/Shops/Shops';

const Shop = () => {
  return (
    <div className={s.shop}>
      <Shops />
      <Outlet />
    </div>
  );
};

export default Shop;
