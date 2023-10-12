import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    token: null,
    email: null,
    username: null,
    firstName: null,
    lastName: null,
    image: null,
    gender: null
  },
  reducers: {
    login: (state, action) => {
      console.log(action, "action");
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.image = action.payload.image;


      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
 
      state.email = null;
      state.username = null;
      state.firstName = null;
      state.lastName = null;
      state.image = null;
      state.gender = null;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
