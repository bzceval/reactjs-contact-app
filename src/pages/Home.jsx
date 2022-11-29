import { Link, Outlet } from "react-router-dom";
import Bird from "../assets/Bird.gif";

const Home = () => {
  return (
    <div className="home">
        <div className="brand text-decoration-none mb-3 mt-4 border-bottom">
          Bird Contact App
        </div>
      <h6 className="text-center">Welcome to the Bird Contact Web App. Access all your connections wherever you are in the world </h6>
      <div className="btn-container text-center my-3">
        <button className="btn login-btn mx-2">
          <Link to="/login">Login</Link>
        </button>
        <button className="btn register-btn mx-2">
          <Link to="/register"> Sign Up</Link>
        </button>
      </div>
      <Outlet />
      <div className="text-center">
        <img src={Bird} alt="Bird" width={300} />
      </div>
    </div>
  );
};

export default Home;
