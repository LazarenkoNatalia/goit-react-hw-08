import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/auth/operations.js'
import { selectUser } from '../../redux/auth/selectors.js'
import stylUser from './Usermenu.module.css'

const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

	const handleLogOut = () => {
		dispatch(logOut())
	}

	return (
		<div className={stylUser.container}>
			<p className={stylUser.text}>Welcome, {user.name}  </p>
			<button onClick={handleLogOut} className={stylUser.btnUser}>logOut</button>
		</div>
	)
}

export default UserMenu