import { NavLink } from 'react-router-dom';
import s from './ShopName.module.scss';

type PropsType = {
  name: string;
  id: string;
  isDisabled: boolean;
};

const ShopName = ({ name, id, isDisabled }: PropsType) => {
  const classNavLink = (info: { isActive: boolean; isPending: boolean }) => {
    if (isDisabled) {
      return s.disabledLink;
    }
    if (info.isActive) {
      return s.activeLink;
    }
    return s.navLink;
  };

  return (
    <NavLink to={`/${id}`} className={classNavLink}>
      {name}
    </NavLink>
  );
};

export default ShopName;
