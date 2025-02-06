import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from '../Header/Header.module.css';

import clsx from 'clsx';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.navlink, isActive && s.active);
  };
  return (
    <div>
      <nav className={s.navlist}>
        <Navigation
          buildLinkClass={buildLinkClass}
          navstyle={s.navlist}
          isLoggedIn={isLoggedIn}
        />

        {isLoggedIn ? (
          <UserMenu s={s} />
        ) : (
          <>
            <AuthNav buildLinkClass={buildLinkClass} navstyle={s.navlist} />
          </>
        )}
      </nav>
    </div>
  );
};

export default AppBar;
