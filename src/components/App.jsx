import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps.js';
import { selectError, selectLoading } from '../redux/contactsSlice.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isError && <h2>Opps...⚠️</h2>}
      {isLoading && <h2>Loading...</h2>}
      <ContactList />
    </div>
  );
}

export default App;
