import { useJsApiLoader } from '@react-google-maps/api';
import Map from './Map';
import AutoCompleat from './AutiCompleat/AutiCompleat';

type Libraries = ('places' | 'drawing' | 'geometry' | 'localContext' | 'visualization')[];

const libraries: Libraries = ['places'];
const defaultCenter = { lat: 51.509, lng: -0.118 };

const GoogleMapComponent = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries: libraries || [],
  });

  return (
    <div>
      <AutoCompleat isLoaded={isLoaded} />
      {isLoaded ? <Map center={defaultCenter} /> : <h2>...map loaded</h2>}
    </div>
  );
};

export default GoogleMapComponent;
