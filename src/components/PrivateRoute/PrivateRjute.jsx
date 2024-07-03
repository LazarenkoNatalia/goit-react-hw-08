import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../redux/auth/selectors'

const PrivateRoute = () => {
    const { isLoggedIn, token } = useSelector(selectAuth)

    if (!isLoggedIn && token) { 
     return  <p> Loading ...</p>
    }
    
    if (!isLoggedIn && !token) { 
        <Navigate to='/login' />
    }
    return <Outlet />
}

export default PrivateRoute