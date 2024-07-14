import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthcontext } from "../context/AuthProvider";

function RequireAuth({ allowedRoles }) {
  const { auth } = useAuthcontext();
  const token = JSON.parse(localStorage.getItem("token"));
  const roles = [425];
  const location = useLocation();

  return roles.find((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : token ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );

  // return token ? <Outlet /> : <Navigate to="login" />;
}

export default RequireAuth;
