import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProfilePrivate = () => {
  const login = localStorage.getItem("customerID");
  return <>{login && login !== null ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProfilePrivate;
