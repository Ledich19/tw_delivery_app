import s from './Shops.module.scss';
import ShopName from './ShopName/ShopName';

type Props = {
  shops: {
    id: string;
    name: string;
    isDisabled: boolean;
  }[];
};

const Shops = ({ shops }: Props) => {
  return (
    <div className={s.shops}>
      <div className={s.title}>Shops: </div>
      {shops.map((shop) => (
        <ShopName key={shop.id} id={shop.id} name={shop.name} isDisabled={shop.isDisabled} />
      ))}
    </div>
  );
};

export default Shops;
