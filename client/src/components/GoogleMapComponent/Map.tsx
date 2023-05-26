import { useCallback, useRef } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import s from './GoogleMapComponent.module.scss';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullScreenControl: false,
};

type Props = {
  center: {
    lat: number;
    lng: number;
  };
};

const GoogleMapComponent = ({ center }: Props) => {
  const mapRef = useRef<object | undefined>(undefined);

  const onLoad = useCallback(function callback(map: object) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  return (
    <div className={s.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      />
    </div>
  );
};

export default GoogleMapComponent;
