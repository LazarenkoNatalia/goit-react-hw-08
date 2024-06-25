import stylContact from "./Contact.module.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsOps'

export default function Contact({
    id,
    name,
    number }) {
    const dispatch = useDispatch()
    // let status = isOnline ? stylefrcard.online : stylefrcard.offline;
    return (
        <>
            <div className={stylContact.card}>
                <div>
                <p className={stylContact.contField}><BsFillPersonFill /> {name}</p>
                <p className={stylContact.contField}><BsFillTelephoneFill /> {number}</p>
                </div>
                <button className={stylContact.btn}
                    onClick={() => dispatch(deleteContact(id))}>Delete</button>
                
               
            </div>
        </>
    )
}