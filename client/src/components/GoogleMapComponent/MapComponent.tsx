import Map from './Map';
import s from './MapComponent.module.scss';

const GoogleMapComponent = () => {
  return (
    <div id="map" className={s.mapWrapper}>
      <div className={s.map}>
        <Map />
      </div>
    </div>
  );
};

export default GoogleMapComponent;
