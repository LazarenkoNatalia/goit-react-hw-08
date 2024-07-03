 import { useEffect } from 'react'

//  import './App.css'
// import ContactList from './components/ContactList/ContactList'
// import ContactForm from './components/ContactForm/ContactForm'
// import SearchBox from './components/SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchContacts } from './redux/contactsOps'
// import { selectLoading, selectError } from './redux/contactsSlice'
// import contactmass from './data/ContactList.json'
import { refreshUser } from './redux/auth/operations.js'
import {selectRefresh} from './redux/auth/selectors.js'
import PrivateRoute from './components/PrivateRoute/PrivateRjute.jsx'
import PublicRoute from './components/PublicRoute/PublicRote.jsx'
import { lazy } from "react"
import { Route, Routes } from 'react-router-dom'
// import { Toaster } from 'react-hot-toast'
import  Layout  from './components/Layout/Layout.jsx'

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"))
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage.jsx"))
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"))
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage.jsx"))


function App() {

 const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
  <>
      {isRefreshing ? (
        <p>Refreshing user, please wait...</p>
      ) : (
        <Layout>
          <Routes>
              <Route path="/" element={<HomePage />} />
               <Route element={<PublicRoute />}>
                 <Route path="/register" element={<RegistrationPage />} />
                 <Route path="/login" element={<LoginPage />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/contacts" element={<ContactsPage />} />
              </Route>
          </Routes>
        </Layout>
      )}
 </> );
}

export default App

  
