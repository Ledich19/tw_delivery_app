import s from './Header.module.scss';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

const Header = () => {
  return (
    <header className={s.header}>
      <HeaderNavigation />
    </header>
  );
};

export default Header;
