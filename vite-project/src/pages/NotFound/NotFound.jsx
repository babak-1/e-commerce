import React from "react";
import "./NotFound.scss";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="notFound">Not Found</div>;
};

export default NotFound;
