import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectIsLoggedIn } from '../../redux/auth/selectors.js'

const Navigation = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	return (
		<nav>
			<ul >
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