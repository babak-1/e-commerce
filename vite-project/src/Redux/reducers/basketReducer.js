import { createSlice } from "@reduxjs/toolkit";
import {
  deleteBasketThunk,
  getBasketThunk,
  updateCartData,
} from "../actions/basketAction";
import { addBasketThunk } from "../actions/basketAction";
import { createBasketThunk } from "../actions/basketAction";

const initialState = {
  loading: false,
  basket: {},
  error: null,
};

const basketReducer = createSlice({
  name: "basket",
  initialState,
  extraReducers: {
    [getBasketThunk.pending]: (state) => {
      state.loading = true;
    },
    [getBasketThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getBasketThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.basket = payload;
    },
    [addBasketThunk.pending]: (state) => {
      state.loading = true;
    },
    [addBasketThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addBasketThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.basket = payload;
    },

    [createBasketThunk.pending]: (state) => {
      state.loading = true;
    },
    [createBasketThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [createBasketThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.basket = payload;
    },

    [updateCartData.pending]: (state) => {
      state.loading = true;
    },
    [updateCartData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [updateCartData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.basket = payload;
    },
    [getBasketThunk.pending]: (state) => {
      state.loading = true;
    },
    [getBasketThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getBasketThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.basket = payload;
    },
    [deleteBasketThunk.pending]: (state) => {
      state.loading = true;
    },
    [deleteBasketThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [deleteBasketThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.basket = payload;
    },
  },
});

export default basketReducer.reducer;
