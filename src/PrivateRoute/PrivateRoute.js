import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextApi } from "../ContextApi/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(ContextApi);
  const location = useLocation();
  if (loader) {
    return <p>Loading...</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
