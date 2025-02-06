import { NavLink } from 'react-router-dom';

const AuthNav = ({ buildLinkClass, navstyle }) => {
  return (
    <div className={navstyle}>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
