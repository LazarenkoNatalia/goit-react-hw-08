import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectIsLoggedIn } from '../../redux/auth/selectors.js'
import stylNav from './Navigation.module.css'

const Navigation = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	return (
		<nav>
			<ul className={stylNav.container}>
				<li>
					<Link to='/'>Home</Link>
				</li>
				{isLoggedIn && (
					<li>
						<Link to='/contacts'>Contacts</Link>
					</li>
				)}
			</ul>
		</nav>
	)
}

export default Navigation