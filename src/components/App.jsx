import './App.css';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';

function App() {
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
