import { useGetPlacesQuery } from '../../../services/mapApi';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setSearchText, setSelectPosition } from '../../../reducers/mapsReducer';
import s from './Search.module.scss';
import { Place } from '../../../app/types';
import { setAddress } from '../../../reducers/formReducer';

const Search = () => {
  const { searchText } = useAppSelector((store) => store.maps);
  const { data = [], isLoading } = useGetPlacesQuery(searchText);

  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setSearchText(e.target.value));
  };
  const handleClick = (place: Place) => {
    console.log({
      display_name: place.display_name,
      osm_id: place.osm_id,
      lat: place.lat,
      lon: place.lon,
    });

    dispatch(setSelectPosition(place));
    dispatch(setAddress(place.display_name));
    dispatch(setSearchText(place.display_name));
  };

  return (
    <div className={s.search}>
      <div className={s.label}>Address:</div>
      <textarea
        rows={3}
        value={searchText}
        className={s.textarea}
        onChange={handleChange}
        placeholder="Search place"
      />
      <div className={s.list}>
        {data.map(
          (place) =>
            place.display_name === searchText || (
              <button type="button" onClick={() => handleClick(place)} key={place.osm_id}>
                {place.display_name}
              </button>
            )
        )}
      </div>
    </div>
  );
};

export default Search;
