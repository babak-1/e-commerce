import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home.jsx";
import Products from "../pages/Products/Products.jsx";
import Details from "../pages/Details/Details.jsx";
import Basket from "../pages/Basket/Basket.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import GenerateToken from "../pages/Login/GenerateToken.jsx";
import UserProfil from "../pages/userProfil/userProfil.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import AuthPrivate from "../components/Outlet/AuthPrivate.jsx";
import ProfilePrivate from "../components/Outlet/ProfilePrivate.jsx";
import SignUpPrivate from "../components/Outlet/SignUpPrivate.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path={`/products`} element={<Products />} />
      <Route path={`/products/:id`} element={<Products />} />
      <Route path={`product-details/:id`} element={<Details />} />
      <Route path={`/basket`} element={<Basket />} />
      <Route path={"/login"} element={<AuthPrivate />}>
        <Route path={`/login`} element={<Login />} />
      </Route>
      <Route path="/register" element={<SignUpPrivate />}>
        <Route path={`/register`} element={<Register />} />
      </Route>
      <Route path={`/user-profile/:token`} element={<GenerateToken />} />
      <Route path="/userprofile" element={<ProfilePrivate />}>
        <Route path={`/userprofile`} element={<UserProfil />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
