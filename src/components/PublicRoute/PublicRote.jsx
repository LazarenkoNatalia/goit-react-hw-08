import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../redux/auth/selectors'

const PublicRoute = () => {
    const { isLoggedIn, token } = useSelector(selectAuth)

    if (!isLoggedIn && token) { 
     return  <p> Loading ...</p>
    }
    
    if (isLoggedIn && token) { 
        <Navigate to='/contacts' />
    }
    return <Outlet />
}

export default PublicRoute