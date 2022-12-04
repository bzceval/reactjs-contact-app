import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Bird from "../assets/Bird.gif";
import { MainContext } from "../context/ContextProvider";
import { logOut } from "../utils/authFunctions";
import BirdWelcome from "../assets/BirdWelcome.png";

const Home = () => {
  const navigate = useNavigate()
  const {user} = useContext(MainContext)
  return ( 
    <div className="p-3 mt-4">
      <div className="home-description text-center">
        <h6 className="fs-2 display-1 text-decoration-underline mb-4">Bird Contact</h6> 
        <p>Welcome to the Bird Contact Web App. Access all your connections wherever you are in the world. </p>
      </div>   
      <div>
      {user && <div className="text-center my-5">
        <div className="user"></div>
          <img src={BirdWelcome} alt="Bird Welcome" width={60}/>
          <h5>Hi {user.displayName}, how are you today?</h5>
          <button className="btn auth-btn mx-2 my-5" onClick={() => logOut()}> Logout</button>
        </div>}
        {!user && <> <div className="text-center my-3">
        <button className="btn auth-btn mx-2" onClick={() => navigate("/login")}> Login</button>
        <button className="btn auth-btn mx-2" onClick={() => navigate("/register")}> Register</button>
      </div> <div className="text-center">
        <img src={Bird} alt="Bird" className="rounded shadow-sm" width={350} />
      </div></>} 
      </div> 
      </div>  
  );
};

export default Home;
