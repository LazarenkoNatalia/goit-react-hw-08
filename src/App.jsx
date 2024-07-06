 import { useEffect , lazy} from 'react'

//  import './App.css'

import { useDispatch, useSelector } from 'react-redux'

import { refreshUser } from './redux/auth/operations.js'
import {selectRefresh} from './redux/auth/selectors.js'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute.jsx'
//  import PublicRoute from './components/PublicRoute/PublicRoute.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
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

                {/* <Route element={<PublicRoute />}>
                 <Route path="/register" element={<RegistrationPage />} />
                 <Route path="/login" element={<LoginPage />} />
              </Route>  */}

               <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        /> 

               {/* <Route element={<PrivateRoute />}>
                <Route path="/contacts" element={<ContactsPage />} />
              </Route>  */}
               <Route path='*' element={<Navigate to="/" />} />    
          </Routes>
        </Layout>
         </div>
      )}
 </> );
}

export default App

  
