import { createSlice } from "@reduxjs/toolkit";
// this is reducer
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
  },
  reducers: {
    AddtoCart: (state, action) => {
      state.carts = [...state.carts, action.payload];
    },
    RemovefromCart: (state, action) => {
      state.carts = state.carts.filter(
        (items) => items.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddtoCart, RemovefromCart } = cartSlice.actions;

export default cartSlice.reducer;
