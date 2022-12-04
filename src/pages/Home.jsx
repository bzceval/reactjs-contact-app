import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="row col-12 p-5">
      <Outlet />
    </div>
  );
};

export default Home;
