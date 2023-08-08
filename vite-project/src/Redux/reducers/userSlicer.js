import { createSlice } from "@reduxjs/toolkit";
import { getCustomerData, updateCustomer } from "../actions/userProfile";

const initialState = {
  loading: false,
  error: null,
  user: [],
};

const userSlicer = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getCustomerData.pending]: (state) => {
      state.loading = true;
    },
    [getCustomerData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getCustomerData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    },
    [updateCustomer.pending]: (state) => {
      state.loading = true;
    },
    [updateCustomer.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [updateCustomer.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    },
  },
});

export default userSlicer.reducer;
