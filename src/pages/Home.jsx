import { Link, Outlet } from "react-router-dom";

const Home = () => {

  
  return (
    <div>
      <div className="container">
        <p>Home</p>
      <Link to="/login">Login</Link> | 
      <Link to="/register"> Sign Up</Link>
      <Outlet />
      </div>
    </div>
  );
};

export default Home;
