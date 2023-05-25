import { NavLink } from 'react-router-dom';
import s from './ShopName.module.scss';

type PropsType = {
  name: string;
  id: string;
};

const ShopName = ({ name, id }: PropsType) => {
  return (
    <NavLink to={`${id}`} className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
      {name}
    </NavLink>
  );
};

export default ShopName;
