import { useMapEvents } from 'react-leaflet';
import { useDispatch } from 'react-redux';

import 'leaflet/dist/leaflet.css';
import { setSearchText, setSelectPosition } from '../../../reducers/mapsReducer';
import { fetchPlace } from '../../../services/mapApi';

const LocationMarker = () => {
  const dispatch = useDispatch();
  useMapEvents({
    async click(e) {
      const place = await fetchPlace({ lat: e.latlng.lat, lon: e.latlng.lng });
      dispatch(setSelectPosition(place));
      dispatch(setSearchText(place.display_name));
    },
  });

  return null;
};

export default LocationMarker;
