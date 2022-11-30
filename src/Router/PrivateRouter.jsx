import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MainContext } from "../context/ContextProvider";

const PrivateRouter = () => {
  const { user } = useContext(MainContext);
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRouter;
