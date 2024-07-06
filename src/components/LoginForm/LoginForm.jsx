import { Field, Form, Formik } from 'formik'

import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/auth/operations.js'
import stylLogForm from './LoginForm.module.css'

const LoginForm = () => {
	
	const dispatch=useDispatch()

	const handleSubmit = (values, actions) => {
		dispatch(logIn(values))
		actions.resetForm()
	}
	return (
		
		
		<Formik initialValues={{ password: '', email: '' }} onSubmit={handleSubmit}>
			<Form  autoComplete='off'>
				<h2 className={stylLogForm.textH}>  Log in,please!</h2>
						<div className={stylLogForm.box}>
				<p  className={stylLogForm.text}>Email: </p>
				<Field name='email' id='email' className={stylLogForm.input}/>
				
				<p className={stylLogForm.text}>Password: </p>
				<Field name='password' id='passwordId' type='password' className={stylLogForm.input}/>
				<hr />
					<button type='submit' className={stylLogForm.btn}>Login</button>
					</div>
			</Form>
		</Formik>
	
	)
}

export default LoginForm