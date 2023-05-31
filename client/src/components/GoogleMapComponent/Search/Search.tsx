import { useState } from 'react';
import { useGetPlacesQuery } from '../../../services/mapApi';
import { useAppDispatch } from '../../../app/hooks';
import { setSelectPosition } from '../../../reducers/mapsReducer';
import s from './Search.module.scss';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const { data = [], isLoading } = useGetPlacesQuery(searchText);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <input className={s.input} type="text" onChange={handleChange} />
      {data.map((place) => (
        <button type="button" onClick={() => dispatch(setSelectPosition(place))} key={place.osm_id}>
          {place.display_name}
        </button>
      ))}
    </>
  );
};

export default Search;
