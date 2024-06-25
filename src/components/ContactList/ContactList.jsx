import stylContList from "./ContactList.module.css"
import { useSelector } from 'react-redux';
import { selectFilteredContacts, } from '../../redux/contactsSlice.js';
// import { selectNameFilter } from '../../redux/filtersSlice.js';
import Contact from '../Contact/Contact.jsx';

export default function ContactList() {

    
  const filteredContacts = useSelector(selectFilteredContacts);

//   const contactitems = contacts.filter(contact =>
//       contact.name && contact.name.includes(filter),
      
//   );


    return (
        <ul className={stylContList.listCard}>
            {filteredContacts.map(contlist => {
                return (
                    <li key={contlist.id} className={stylContList.card}>
                        <Contact
                            id={contlist.id}
                            name={contlist.name}
                            number={contlist.number}
                           
                        />
                    </li>
                );
            })}
        </ul>
    )
}