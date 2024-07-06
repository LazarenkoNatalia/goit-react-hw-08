import Navigation from '../Navigation/Navigation.jsx'
import UserMenu from '../UserMenu/UserMenu.jsx'
import AuthNav from '../AuthNav/AuthNav.jsx'
 import stylAppBar from './AppBar.module.css'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors.js'

export default function AppBar() 
{
const isLodggedIn = useSelector(selectIsLoggedIn)
    return <>
        <header className={stylAppBar.headerBar}>
            <Navigation />
            { isLodggedIn? <UserMenu /> : <AuthNav /> }
           

    </header>
    </>
}