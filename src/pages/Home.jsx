import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Bird from "../assets/Bird.gif";
import { MainContext } from "../context/ContextProvider";
import { logOut } from "../utils/authFunctions";

const Home = () => {
  const navigate = useNavigate()
  const {user} = useContext(MainContext)
  return ( 
    <div className="p-5 m-2">
      <div className="text-center">
        <h6 className="fs-2 display-1 text-decoration-underline">Bird Contact</h6> 
        <p>Welcome to the Bird Contact Web App.</p>   
        <p>Access all your connections wherever you are in the world</p>
      </div>   
      <div className="user">
      {user && <div className="btn-container text-center my-3">
          <button className="btn login-btn mx-2" onClick={() => logOut()}> Logout</button>
        </div>}
        {!user && <> <div className="btn-container text-center my-3">
        <button className="btn login-btn mx-2" onClick={() => navigate("/login")}> Login</button>
        <button className="btn register-btn mx-2" onClick={() => navigate("/register")}>Register</button>
      </div> <div className="text-center">
        <img src={Bird} alt="Bird" width={350} />
      </div></>} 
      </div> 
      </div>  
  );
};

export default Home;
