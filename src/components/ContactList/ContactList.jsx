import stylContList from "./ContactList.module.css"
import { useSelector } from 'react-redux';
import { selectFilteredContacts, } from '../../redux/contacts/selectors.js';

import Contact from '../Contact/Contact.jsx';

export default function ContactList() {
   
    const filteredContacts = useSelector(selectFilteredContacts)
    
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