import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="container p-5">
      <p>Home</p>
      <Link to="/login">Login</Link> | <Link to="/register"> Sign Up</Link>
      <Outlet />
    </div>
  );
};

export default Home;
