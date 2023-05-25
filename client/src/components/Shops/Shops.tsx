import s from './Shops.module.scss';
import ShopName from './ShopName/ShopName';

const Shops = ({
  shops,
}: {
  shops: {
    id: string;
    name: string;
  }[];
}) => {
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
