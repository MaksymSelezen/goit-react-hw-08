import s from './Header.module.css';

import AppBar from '../AppBar/AppBar';
const Header = () => {
  return (
    <div className={s.header}>
      <h1 className={s.title}>Phonebook</h1>
      <AppBar />
    </div>
  );
};

export default Header;
