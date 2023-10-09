import * as React from "react";
import * as ReactDOM from "react-dom/client";
import  ButtonAppBar  from "./Header"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Products from "./routes/products";
import Cart from "./routes/carts";
import reportWebVitals from './reportWebVitals';
import ProductList from "./routes/productDetails";
import ForCart from "./routes/cartDetails";
// import { Login } from "@mui/icons-material";
// import LoginPage from "./routes/login";

const router = createBrowserRouter([
  // {
  //   path:"/login",
  //   element: <LoginPage />
  // },
  {
    path:"products/:productId",
    element : <ProductList />
  },
  {
    path:"carts/:cartID",
    element : <ForCart />
  },
  {
    path: "/",
    element:<Root />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/carts",
        element: <Cart />
      }
    ],
  },
],

);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ButtonAppBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();