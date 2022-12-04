import React, { useContext } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import { AddUser } from "../utils/firebaseFunctions";
import { MainContext } from "../context/ContextProvider";

// const initialValues = {username:"", phoneNumber:"", gender:""}

const AddContact = () => {
  const { info, setInfo } = useContext(MainContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    AddUser(info);
    setInfo({ username: "", phoneNumber: "", gender: "" });
  };

  return (
    <div className="row col-12 p-5 m-auto">
      <h6 className="text-center fs-2 display-1 mb-4 mt-3 text-decoration-underline ">
        Add Contact
      </h6>
      <ContactForm info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddContact;
