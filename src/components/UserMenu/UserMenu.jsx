import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';

const UserMenu = ({ s }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* {user && (
        <span
          className={s.userName}
          style={{ cursor: 'pointer', marginRight: '10px' }}
        >
          Welcome, {user.name}
        </span>
      )} */}
      <button className={s.navlink} onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
