import "./Modal.scss";
import { AiFillCloseCircle } from "react-icons/ai"; 
import { UpdateUser } from "../../utils/firebaseFunctions";

const Modal = ({setShowModal, showModal, editItem, seteditItem}) => { 

   const handleChange = (e) => {
    e.preventDefault() 
    const {name, value} = e.target; 
    seteditItem({...editItem, [name]: value})
}

const handleSubmit=(e)=>{
  e.preventDefault() 
    UpdateUser(editItem) 
}
  
  if(!showModal){
    return null
  }
  
  return ( 
      <div className="modal-container">
        <div className="modal-body">
          <AiFillCloseCircle className="close-btn" onClick={()=> setShowModal("")}/>
            <form onSubmit={handleSubmit} className="mt-4 update-form">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Fullname</label>
                <input onChange={handleChange} name="username" value={editItem.username} type="text" className="form-control" id="username" /> 
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input onChange={handleChange} name="phoneNumber" value={editItem.phoneNumber} type="text" className="form-control" id="phoneNumber" /> 
              </div>
              <div className="mb-3">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select onChange={handleChange} name="gender" value={editItem.gender} id='gender' className="form-select" aria-label="Please select gender" >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option> 
                  </select>
              </div>
              <div className="mb-3 d-grid mt-4">
              <button type="submit" className="btn btn-outline-light"> Update Contact </button>
              </div>
            </form>
        </div>  
      </div> 
  );
};

export default Modal;
