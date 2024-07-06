import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { register } from "../../redux/auth/operations.js"
import stylForm from './RegistrationForm.module.css'

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
});

const RegistrationForm = () => {
	const dispatch =useDispatch()
	

	const handleSubmit = (values, actions) => {
		console.log(values)
		dispatch(register(values))
		// submit(values)
		actions.resetForm()
	}
	return (
		<div>
		
		<Formik
			initialValues={{ name: '', email: '', password: '' }}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>  
				<Form autoСomplete='off'>
					<h2 className={stylForm.textH}>  Register,please!</h2>
					
					<div className={stylForm.box}>
				<p className={stylForm.text}>Name</p>
				<Field name='name' id="name" className={stylForm.input} autoСomplete='username'/>
				<ErrorMessage name='name' component='span' className={stylForm.input} />
				<br />
				<p className={stylForm.text}>Email</p>
				<Field name='email' id='email' className={stylForm.input} autoСomplete='username'/>
				<ErrorMessage name='email' component='span' className={stylForm.input} />
				<br />
				<p className={stylForm.text}>Password</p>
				<Field name='password' type='password' id='password' className={stylForm.input}  autoСomplete='current-password' />
				<ErrorMessage name='password' component='span' className={stylForm.input} />
				<hr />
					<button type='submit' className={stylForm.btn}>Register</button>
					</div>
			</Form>
		</Formik>
		</div>
	)
}

export default RegistrationForm