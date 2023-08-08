import React from "react";

import {Header} from "../Header/Header.jsx";
import Routes from "../../routes/Routers.jsx";
import Footer from "../footer/Footer.jsx";
const Layout = () => {
  return (
    <div>
      <Header />
      <Routes />
      <Footer/>
    </div>
  );
};

export default Layout;
