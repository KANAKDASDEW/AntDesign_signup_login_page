import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./reducers/productSlice.js"
import userReducer from "./reducers/userSlice.js"
export const store = configureStore({
  reducer: {
    productReducer,
    userReducer


  },
});



