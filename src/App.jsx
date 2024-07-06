 import { useEffect , lazy} from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { refreshUser } from './redux/auth/operations.js'
import {selectRefresh} from './redux/auth/selectors.js'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute.jsx'

import { Navigate, Route, Routes } from 'react-router-dom'

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
          <div>
        <Layout>
          <Routes>
              <Route path="/" element={<HomePage />} />

  <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        /> 

            

               <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        /> 

               <Route path='*' element={<Navigate to="/" />} />    
          </Routes>
        </Layout>
         </div>
      )}
 </> );
}

export default App

  
