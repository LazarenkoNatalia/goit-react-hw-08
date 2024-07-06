import { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//  import './App.css'
import ContactList from '../../components/ContactList/ContactList.jsx'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import SearchBox from '../../components/SearchBox/SearchBox.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../redux/contacts/operations.js'
import { selectLoading, selectError } from '../../redux/contacts/selectors.js'
// import contactmass from './data/ContactList.json'
export default function ContactsPege() {
  const dispatch = useDispatch()
  // console.log(state)
   const loading = useSelector(selectLoading)
   const error = useSelector(selectError)
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
    
    return (
     <>
      <ContactForm />
       <SearchBox  /> 
       {loading && <p> Loading...</p>}
      {error && <p> Some error </p>}
       <ContactList 
       />
      
     </>
   )
}
