//  import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
//  import { selectAuth } from '../../redux/auth/selectors'

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
   return isLoggedIn ? Component : <Navigate to={redirectTo} />;
 };



//  const PrivateRoute = () => {
//      const { isLoggedIn, token } = useSelector(selectAuth)

//      if (!isLoggedIn && token) { 
//       return  <p> Loading ...</p>
//      }
    
//      if (!isLoggedIn && !token) { 
//          <Navigate to='/login' />
//      }
//      return <Outlet />
//  }

export default PrivateRoute

