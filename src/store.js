import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './counterSlice'
import cartReducer from "./routes/cartSlice";
export default configureStore({
  reducer: {
    // counter: counterReducer,
    cart: cartReducer,
  },
});
