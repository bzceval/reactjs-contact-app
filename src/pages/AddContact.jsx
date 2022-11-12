import React, {useContext} from "react";
import ContactForm from '../components/ContactForm/ContactForm'
import {AddUser} from '../utils/firebaseFunctions'
import { AuthContext } from '../context/AuthContext'

// const initialValues = {username:"", phoneNumber:"", gender:""}

const AddContact = () => {
// const [info, setInfo] = useState(initialValues) 
const { info, setInfo } = useContext(AuthContext);

const handleSubmit = (e) => {
  e.preventDefault()
  AddUser(info)
  setInfo({username:"", phoneNumber:"", gender:""});
}

  return (
    <div className="add-contact-container p-5">
      <div className="container">
        <h2 className="text-start border-bottom">Add Contact</h2>
        <ContactForm info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddContact;