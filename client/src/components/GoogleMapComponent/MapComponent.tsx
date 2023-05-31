import { useEffect, useState } from 'react';
import Map from './Map';
import Search from './Search/Search';
import s from './MapComponent.module.scss';
import { useGetPlacesReversQuery } from '../../services/mapApi';
import { useAppSelector } from '../../app/hooks';

const GoogleMapComponent = () => {
  return (
    <div id="map" className={s.mapWrapper}>
      <div className={s.map}>
        <Map />
      </div>
      {/* <Search /> */}
    </div>
  );
};

export default GoogleMapComponent;
