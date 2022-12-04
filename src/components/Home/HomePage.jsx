import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Bird from "../../assets/Bird.gif";
import { MainContext } from "../../context/ContextProvider";
import { logOut } from "../../utils/authFunctions";

const HomePage = () => {
  const navigate = useNavigate()
  const {user} = useContext(MainContext)
  
  return (
    <div>
      <div className="brand text-decoration-none mb-3 mt-4 border-bottom">
        <h6 className="text-center fs-2 display-1 my-4 pt-4 text-decoration-underline">Bird Contact App</h6>
      </div>
      <h6 className="text-center">
        Welcome to the Bird Contact Web App. Access all your connections
        wherever you are in the world
      </h6>
      
      {user && <div className="btn-container text-center my-3">
        <button className="btn login-btn mx-2" onClick={() => logOut()}> Logout</button>
      </div>}

      {!user && <> <div className="btn-container text-center my-3">
        <button className="btn login-btn mx-2" onClick={() => navigate("/login")}> Login</button>
        <button className="btn register-btn mx-2" onClick={() => navigate("/register")}>Register</button>
      </div> <div className="text-center">
        <img src={Bird} alt="Bird" width={250} />
      </div></>} 
      
      
    </div>
  );
};

export default HomePage;