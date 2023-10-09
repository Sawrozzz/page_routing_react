import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Products from "./routes/products";
import Cart from "./routes/carts";
import reportWebVitals from "./reportWebVitals";
import ProductList from "./routes/productDetails";
import ForCart from "./routes/cartDetails";
import LoginPage from "./routes/login";
import Sidebar from "./routes/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Sidebar />,
        children: [
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/carts",
            element: <Cart />,
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "products/:productId",
        element: <ProductList />,
      },
      {
        path: "/carts/:cartId",
        element: <ForCart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
