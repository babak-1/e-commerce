import React, { useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";

const GenerateToken = () => {
  const param = useParams().token;
  const navigate = useNavigate();

  console.log(useParams(), "token params");
  useEffect(() => {
    if (!localStorage.getItem("customerID")) {
      const url = new URL("https://api.chec.io/v1/customers/exchange-token");

      let headers = {
        "X-Authorization": "pk_52354d91aba635c79523c2d0c1f1b1e5c7a3f2b2e4a03",
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      let body = {
        token: param,
      };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then(
          (json) =>
            !localStorage.getItem("customerID") &&
            localStorage.setItem("customerID", json.customer_id)
        );
    }
  }, [param]);

  const id = console.log(localStorage.getItem("customerID"));

  useEffect(() => {
    id !== null && navigate("/userprofile");
  }, [id, navigate]);

  return <div></div>;
};

export default GenerateToken;
