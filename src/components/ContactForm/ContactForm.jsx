import { Field, Form, Formik, ErrorMessage } from 'formik'
import stylForm from './ContactForm.module.css'
import * as Yup from 'yup'
// import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactsOps'

const validSchema = Yup.object().shape({
	name: Yup.string().min(3, 'Too small').max(50, 'To large').required('Not valid'),
	number: Yup.string().min(5, 'Min 5 numbers').required('Not valid'),
})

export default function ContactForm() {
    const dispatch = useDispatch()
    
    return (
        <Formik
            initialValues={{
                name: '',
                number: '', 
            }}
            onSubmit={(values, actions) => {
                    
                dispatch(addContact({...values}))
             
                actions.resetForm()
            }}
            validationSchema={validSchema}>
           
            <Form className={stylForm.form}>
               <h2 className={stylForm.textH}>Phonebook</h2>
                <div className={stylForm.box}>
                    <div>
                 <p className={stylForm.text}>Name</p>
                    <Field type='text' name='name' className={stylForm.input} />
                    <ErrorMessage name='name' component='span' className={stylForm.input} />
                 
                 <p className={stylForm.text}>Number</p>
                <Field type='text' name='number' className={stylForm.input}/>
                    <ErrorMessage name='number' component='span' className={stylForm.input} />
                    
                </div>
                    <button type='submit' className={stylForm.btn}>Add Contact</button>
                </div>
            </Form>
        </Formik>

    )
}