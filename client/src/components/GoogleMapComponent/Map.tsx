import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L, { LatLngExpression, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../app/hooks';
import LocationMarker from './LocationMarker/LocationMarker';
import ResetCenterView from './ResetCenterView/ResetCenterView';
import LeafletRoutingMachine from './LeafletRoutingMachine/LeafletRoutingMachine';
import pointer from '../../assets/pointer.png';

type Props = {
  shopLocation: LatLngTuple | null;
  shopName: string | undefined;
};

const DEFOULT_LOCATION = [50.454, 30.523] as LatLngExpression;

const Map = ({ shopLocation, shopName }: Props) => {
  const { selectPosition } = useAppSelector((store) => store.maps);
  const location = selectPosition
    ? ([parseFloat(selectPosition.lat), parseFloat(selectPosition.lon)] as LatLngExpression)
    : null;

  const myIcon = L.icon({
    iconUrl: pointer,
    iconRetinaUrl: pointer,
    iconSize: [30, 40],
  });

  return (
    <MapContainer center={location || DEFOULT_LOCATION} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectPosition && location && (
        <Marker icon={myIcon} position={location}>
          <Popup>{selectPosition && selectPosition.display_name}</Popup>
        </Marker>
      )}
      {shopLocation && (
        <Marker icon={myIcon} position={shopLocation}>
          <Popup>{shopName}</Popup>
          <Tooltip sticky>{shopName}</Tooltip>
        </Marker>
      )}
      <LeafletRoutingMachine location={location} shopLocation={shopLocation} />
      <ResetCenterView />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
