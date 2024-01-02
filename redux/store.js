import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

//create a store and give it reducers
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
