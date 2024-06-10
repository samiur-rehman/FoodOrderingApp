import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const storeApp = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default storeApp;
