import { createSlice } from "@reduxjs/toolkit";
// this is reducer
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
  },
  reducers: {
    AddtoCart: (state, action) => {
      // console.log("THis is add to cart", action)
      state.carts = [...state.carts, action.payload];
    },
    RemovefromCart: (state, action) => {
      console.log("Its workiing");
      state.carts = state.carts.filter(
        (items) => items.id !== action.payload.id
      );
      console.log("this is saroj");
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes.
    //   // Also, no return statement is required from these functions.
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { AddtoCart, RemovefromCart } = cartSlice.actions;

export default cartSlice.reducer;
