import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink to="/" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
              shop
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/cart" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
              cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
