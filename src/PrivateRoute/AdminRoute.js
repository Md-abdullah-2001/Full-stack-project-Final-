import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextApi } from "../ContextApi/AuthContext";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(ContextApi);
  const [isAdmin, seeloader] = useAdmin(user.email);
  const location = useLocation();
  if (loader || seeloader) {
    return <p>Loading...</p>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
