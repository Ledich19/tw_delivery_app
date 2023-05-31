import { useEffect } from 'react';
import L, { LatLngLiteral, LatLngTuple } from 'leaflet';
import { useMap } from 'react-leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

type Props = {
  location: LatLngTuple | LatLngLiteral | null;
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
          extendToWaypoints: true,
          missingRouteTolerance: 10,
        },
        routeWhileDragging: true,
        addWaypoints: false,
      }).addTo(map);
    }
  }, [location, shopLocation, map]);

  return null;
};

export default LeafletRoutingMachine;
