import "./Modal.scss";
const Modal = ({setShowModal, showModal}) => {
  if(!showModal){
    return null
  }
  
  return ( 
      <div className="modal-container">
        <div className="modal-body">
          <button className="btn btn-light" onClick={()=> setShowModal("")}>X</button>
           <p>Say Hi</p>
        </div>  
      </div> 
  );
};

export default Modal;
