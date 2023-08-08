import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../API/productAPI";

export const getBasketThunk = createAsyncThunk(
  "getBasket/fetchGetBasket",
  async (basketID) => {
    const response = await api.getBasket(basketID);
    const basket = response?.data;
    console.log(basket, "basketdeyem");
    return basket;
  }
);

export const deleteBasketThunk = createAsyncThunk(
  "deleteBasket/fetchDeletedBasket",
  async (data) => {
    const response = await api.deleteBasketItem(basketId, data.productId);
    const result = response;
    return result;
  }
);

const basketId = localStorage.getItem("basketID");
export const addBasketThunk = createAsyncThunk(
  "addBasket/fetchAddBasket",
  async (data) => {
    const body = {
      id: data.product_id,
      quantity: data.quantity,
    };

    try {
      const result = await fetch(`https://api.chec.io/v1/carts/${basketId}`, {
        method: "POST",
        headers: {
          "X-Authorization": "pk_52354d91aba635c79523c2d0c1f1b1e5c7a3f2b2e4a03",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const response = await result.json();
      console.log(response, "duzuneyaz");
      return response.cart;
    } catch (error) {
      if (!error.response) {
        console.log(error, "errordayam");
        throw error;
      }
    }
  }
);

export const createBasketThunk = createAsyncThunk(
  "creatBasket/fetchCreateBasket",
  async () => {
    try {
      const response = await api.createBasket();
      localStorage.setItem("basketID", response?.data?.id);
      const creatBasket = response?.data;
      return creatBasket;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateCartData = createAsyncThunk(
  "updateBasket/fetchUpdateBasket",
  async (data) => {
    const body = {
      quantity: data.quantity,
    };
    const result = await fetch(
      `https://api.chec.io/v1/carts/${basketId}/items/${data.itemId}`,
      {
        method: "PUT",
        headers: {
          "X-Authorization": "pk_52354d91aba635c79523c2d0c1f1b1e5c7a3f2b2e4a03",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const response = await result.json();
    console.log(response, "bu menim update-im");
    return response;
  }
);
