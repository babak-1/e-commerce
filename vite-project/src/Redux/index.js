import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reducers/basketReducer";
import userSlicer from "./reducers/userSlicer";
export const store = configureStore({
  reducer: {
    cart: basketReducer,
    user: userSlicer,
  },
});
