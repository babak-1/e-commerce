import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthPrivate = () => {
  const login = localStorage.getItem("customerID");

  return <>{!login ? <Outlet /> : <Navigate to="/userprofile" />}</>;
};

export default AuthPrivate;
