import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../app/hooks';
import LocationMarker from './LocationMarker/LocationMarker';
import ResetCenterView from './ResetCenterView/ResetCenterView';
// import s from './Map.module.scss';

type Props = {
  shopLocation: [number, number] | null;
  shopName: string | undefined;
};

const Map = ({ shopLocation, shopName }: Props) => {
  const { selectPosition } = useAppSelector((store) => store.maps);
  const location = selectPosition
    ? ([parseFloat(selectPosition.lat), parseFloat(selectPosition.lon)] as LatLngExpression)
    : ([50.454, 30.523] as LatLngExpression);

  return (
    <MapContainer center={location} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectPosition && (
        <Marker position={location}>
          <Popup>{selectPosition && selectPosition.display_name}</Popup>
        </Marker>
      )}
      {shopLocation && (
        <Marker position={shopLocation}>
          <Popup>{shopName}</Popup>
        </Marker>
      )}

      <ResetCenterView />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
