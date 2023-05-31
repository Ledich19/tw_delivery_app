import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useAppSelector } from '../../../app/hooks';

const ResetCenterView = () => {
  const { selectPosition } = useAppSelector((store) => store.maps);
  const map = useMap();

  useEffect(() => {
    if (selectPosition && map) {
      map.setView(
        { lat: parseFloat(selectPosition.lat), lng: parseFloat(selectPosition.lon) },
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectPosition, map]);

  return null;
};

export default ResetCenterView;
