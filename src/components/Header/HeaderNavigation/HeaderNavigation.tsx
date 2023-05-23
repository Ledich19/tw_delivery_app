import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Header.module.scss';

const HeaderNavigation: React.FC = () => {
  return (
    <nav className={s.header__navigation}>
      <ul className={s.header__list}>
        <li className={s.header__item}>
          <NavLink to="/" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
            home
          </NavLink>
        </li>
        <li className={s.header__item}>
          <NavLink to="/editor" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
            cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
