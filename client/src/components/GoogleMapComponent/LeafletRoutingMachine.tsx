import { useEffect } from 'react';
import L, { LatLngTuple } from 'leaflet';
import { useMap } from 'react-leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

type Props = {
  location: LatLngTuple | null;
  shopLocation: LatLngTuple | null;
};

const LeafletRoutingMachine = ({ location, shopLocation }: Props) => {
  const map = useMap();

  useEffect(() => {
    if (location && shopLocation) {
      L.Routing.control({
        waypoints: [L.latLng(location), L.latLng(shopLocation)],
        lineOptions: {
          styles: [{ color: 'blue' }],
        },
        routeWhileDragging: true,
        addWaypoints: false,
      }).addTo(map);
    }
  }, [location, shopLocation, map]);

  return null;
};

export default LeafletRoutingMachine;
