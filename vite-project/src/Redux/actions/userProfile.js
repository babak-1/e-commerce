import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../API/productAPI";

const customerID = localStorage.getItem("customerID");

export const getCustomerData = createAsyncThunk("user/fetchUser", async () => {
  try {
    const response = await api.customDetails(customerID);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateCustomer = createAsyncThunk(
  "user/fetchUpdatedUser",
  async (data) => {
    try {
      const url = new URL(`https://api.chec.io/v1/customers/${data.id}`);

      let headers = {
        "X-Authorization": "sk_52354405e6bcb8e5890af632ffc807d60524db28ebe05",
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      let body = {
        email: data.email,
        phone: data.phone,
        firstname: data.fullName,
        external_id: null,
      };

      const response = await fetch(url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
    }
  }
);
