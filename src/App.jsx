import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { RiContactsBook3Line } from 'react-icons/ri';
import contactsData from './assets/contactsInfo.json';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? contactsData
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(5),
      name,
      number,
    };

    setContacts(prev => [...prev, newContact]);
  };

  const handleFilterChange = ev => {
    setFilter(ev.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className={css.phonebook}>
      <div className={css.container}>
        <h1 className={css.mainTitle}>
          <RiContactsBook3Line className={css.mainIcon} /> Phonebook
        </h1>
        <ContactForm onSubmit={addContact} contacts={contacts} />
        <SearchBox value={filter} onChange={handleFilterChange} />
        {contacts.length !== 0 ? (
          <ContactList
            contacts={filterContacts}
            onDeleteContact={deleteContact}
          />
        ) : (
          <p className={css.infoText}>Your phonebook is empty</p>
        )}
        {filterContacts.length === 0 && contacts.length !== 0 && (
          <p className={css.infoText}>No contacts found</p>
        )}
      </div>
    </section>
  );
};

export default App;
