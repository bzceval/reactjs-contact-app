import "./Modal.scss";
const Modal = ({setShowModal, showModal}) => {
  if(!showModal){
    return null
  }
  
  return ( 
      <div className="modal-container">
        <div className="modal-body">
          <button className="btn btn-light" onClick={()=> setShowModal("")}>X</button>
            <form className="mt-4 update-form">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Fullname</label>
                <input name="username" value={null} type="text" className="form-control" id="username" /> 
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input name="phoneNumber" value={null} type="text" className="form-control" id="phoneNumber" /> 
              </div>
              <div className="mb-3">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select name="gender" value={null} id='gender' className="form-select" aria-label="Please select gender" >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option> 
                  </select>
              </div>
              <div className="mb-3 d-grid mt-4">
              <button type="submit" className="btn btn-outline-light"> Add Contact </button>
              </div>
            </form>
        </div>  
      </div> 
  );
};

export default Modal;
