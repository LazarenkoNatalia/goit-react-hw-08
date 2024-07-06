import { Link } from 'react-router-dom'
import stylAuthNav from './AuthNav.module.css'

const AuthNav = () => {
	return (
		<nav>

			<ul className={stylAuthNav.container}>
				<li>
				<Link to='/login' className={stylAuthNav.item}>Login</Link>
			</li>
			<li>
				<Link to='/register'>Registration</Link>
				</li>
				</ul>
		</nav>
	)
}

export default AuthNav