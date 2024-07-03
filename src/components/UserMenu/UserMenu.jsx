import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/auth/operations.js'
import { selectUser } from '../../redux/auth/selectors.js'

const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

	const handleLogOut = () => {
		dispatch(logOut())
	}

	return (
		<div >
			<p>Welcome, {user.name}</p>
			<button onClick={handleLogOut}>logOut</button>
		</div>
	)
}

export default UserMenu