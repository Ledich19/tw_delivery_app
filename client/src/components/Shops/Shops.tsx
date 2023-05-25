import s from './Shops.module.scss';
import { useAppSelector } from '../../app/hooks';
import ShopName from './ShopName/ShopName';

const Shops = () => {
  const { shops } = useAppSelector((store) => store.store);

  return (
    <div className={s.shops}>
      <div className={s.title}>Shops: </div>
      {shops.map((shop) => (
        <ShopName key={shop.id} id={shop.id} name={shop.name} />
      ))}
    </div>
  );
};

export default Shops;
