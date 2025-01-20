import { useSelector } from 'react-redux';
import Contact from './Contact/Contact';
import s from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilters } from '../../redux/filtersSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={s.list}>
      {visibleContacts.map(user => (
        <li key={user.id}>
          <Contact data={user} />
        </li>
      ))}
    </ul>
  );
}
