import { Field, Form, Formik } from 'formik'
import { useId } from 'react'
import { useDispatch } from 'react-redux'
import{logIn} from '../../redux/auth/operations.js'

const LoginForm = () => {
	const passwordId = useId()
	const emailId = useId()
	const dispatch=useDispatch()

	const handleSubmit = (values, actions) => {
		dispatch(logIn(values))
		actions.resetForm()
	}
	return (
		<Formik initialValues={{ password: '', email: '' }} onSubmit={handleSubmit}>
			<Form>
				<label htmlFor={emailId}>Email: </label>
				<Field name='email' id={emailId} />
				<br />
				<label htmlFor={passwordId}>Password: </label>
				<Field name='password' id={passwordId} type='password' />
				<hr />
				<button type='submit'>Login</button>
			</Form>
		</Formik>
	)
}

export default LoginForm