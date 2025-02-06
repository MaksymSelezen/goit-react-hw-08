import { useSelector } from 'react-redux';
import Contact from './Contact/Contact';
import s from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/filters/selectors';

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
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
