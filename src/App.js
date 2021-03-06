import { useSelector } from "react-redux";
import ContactsList from './components/ContactsList/ContactsList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import {getContacts, getFilterContacts} from './redux/app/app-selectors';
import './App.css';

export default function App () {

  const contacts = useSelector(getContacts);
  const filterContacts = useSelector(getFilterContacts);
  
  const getFilteredContacts = () => {
      if(contacts === []) {
        return;
      } 
      
      if(filterContacts === '') {
        return contacts;
      }
      
      return contacts.filter(contact => 
        contact.name.toLowerCase()
        .includes(filterContacts.toLowerCase()) 
      );
  };

  return (
    <div className="App">
      
      <h2 id="title-phonebook">Phonebook</h2>
      <ContactForm />
      
      <h2 id='contacts-title'>Contacts</h2>
      <Filter />
      <ContactsList data={getFilteredContacts()} ></ContactsList>

    </div>
  );
};

