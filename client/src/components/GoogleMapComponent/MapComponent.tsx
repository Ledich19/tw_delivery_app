import { useAppSelector } from '../../app/hooks';
import { useGetShopsQuery } from '../../services/shopApi';
import Map from './Map';
import s from './MapComponent.module.scss';

const GoogleMapComponent = () => {
  const { data = [] } = useGetShopsQuery('');
  const shopInCart = useAppSelector((state) => state.store.cart[0]?.info.shopId || null);
  const currentShop = data.find((shop) => shop.id === shopInCart);

  return (
    <div id="map" className={s.mapWrapper}>
      <div className={s.map}>
        <Map
          shopName={currentShop && currentShop.name}
          shopLocation={
            currentShop
              ? [parseFloat(currentShop.address.lat), parseFloat(currentShop.address.lon)]
              : null
          }
        />
      </div>
    </div>
  );
};

export default GoogleMapComponent;
