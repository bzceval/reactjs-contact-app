import React from "react";
import "./ContactForm.scss";

const ContactForm = ({ info, setInfo, handleSubmit }) => {
  // const {username, phoneNumber, gender} = info
  // console.log(info)
  const handleChange = (e) => {
    e.preventDefault();
    // const name = e.target.name
    // const value= e.target.value
    const { name, value } = e.target;
    console.log(name, value);
    setInfo({ ...info, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit} className="contact-form shadow rounded p-2" >
      <div className="mb-3 pt-3 mx-3">
        <label htmlFor="username" className="form-label mb-1"> Fullname </label>
        <input onChange={handleChange} name="username" value={info.username} type="text" className="shadow-sm form-control p-2" id="username" />
      </div>

      <div className="mb-3 pt-3 mx-3">
        <label htmlFor="phoneNumber" className="form-label mb-1"> Phone Number </label>
        <input onChange={handleChange} name="phoneNumber" value={info.phoneNumber} type="text" className="shadow-sm form-control p-2" id="phoneNumber" />
      </div>

      <div className="mb-3 pt-3 mx-3">
        <label htmlFor="gender" className="form-label mb-1"> Gender </label>
        <select onChange={handleChange} name="gender" value={info.gender} id="gender" className="shadow-sm form-select p-2" aria-label="Please select gender" >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-3 d-grid mt-4 mx-3">
        <button type="submit" className="btn btn-primary">Add Contact</button>
      </div>
    </form>
     
  );
};

export default ContactForm;
