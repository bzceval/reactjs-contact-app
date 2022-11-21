import { Link, Outlet } from "react-router-dom";

const Home = () => {

  
  return (
    <div className="home-container">
      <div className="container">Home</div>
      <Link to="/login">Login</Link> | 
      <Link to="/register"> Sign Up</Link>
      <Outlet />
    </div>
  );
};

export default Home;
