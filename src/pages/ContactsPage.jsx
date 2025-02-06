import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectLoading } from '../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  return (
    <div className="contactPage">
      <ContactForm />
      <SearchBox />
      {isError && <h2>Opps...⚠️</h2>}
      {isLoading && <h2>Loading...</h2>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
