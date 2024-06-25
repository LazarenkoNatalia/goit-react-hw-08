 import { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//  import './App.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from './redux/contactsOps'
import { selectLoading, selectError } from './redux/contactsSlice'
// import contactmass from './data/ContactList.json'
function App() {
  const dispatch = useDispatch()
  // console.log(state)
   const loading = useSelector(selectLoading)
   const error = useSelector(selectError)
  
  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

//   const [phonebook, setPhonebook] = useState(() => {
//     const savedContacts = localStorage.getItem("saved-contacts");

//     if (savedContacts !== null) {
//       return JSON.parse(savedContacts);
//     }
//     return contactmass;
//   });


// useEffect(() => {
//     localStorage.setItem("saved-contacts", JSON.stringify(phonebook));
//   }, [phonebook]);


//   const [search, setSearch] = useState('')

//   const addCard = (newCard) => {
//       setPhonebook((prevPhone) => { return [...prevPhone, newCard] })
//   }

//   const delCard = (cardId) => {
//      setPhonebook((prevPhone) => { return prevPhone.filter(card => card.id !== cardId) })
//   }

//   const viewPhonebook = phonebook.filter((card) => 
//     card.name.toLowerCase().includes(search.toLowerCase())
//   )
  
  
   return (
     <>
      <ContactForm />
       <SearchBox  /> 
       {loading && <p> Loading...</p>}
      {error && <p> Some error </p>}
       <ContactList 
        //  contactitems={viewPhonebook} onDel={delCard}
       />
      
     </>
   )
}

export default App
