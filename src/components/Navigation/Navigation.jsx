import { NavLink } from 'react-router-dom';
import { selectUser } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navigation = ({ buildLinkClass, navstyle, isLoggedIn }) => {
  const user = useSelector(selectUser);

  return (
    <div className={navstyle}>
      {user && isLoggedIn && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span style={{ marginRight: '10px', gap: '0' }} className={navstyle}>
            {' '}
            <FaUserCircle size={24} style={{ marginRight: '8px' }} />
            Welcome, {user.name}
          </span>
        </motion.div>
      )}
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
