import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./routes/cartSlice";
import loginSliceReducer from "./routes/loginSlice";
export default configureStore({
  //This is OK
  reducer: {
    cart: cartReducer,
    login:loginSliceReducer
  },
});