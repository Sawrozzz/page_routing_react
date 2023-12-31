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
import store from "./store";
import { Provider } from "react-redux";
// import SignIn from "./routes/login";
import SignUp from "./routes/signup";
import Profile from "./routes/profile";
import CategoryDetails from "./routes/categoryDetails";
import SearchBar from "./routes/SearchBar";

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
            path: '/categories/:categoryID',
            element: <CategoryDetails />,
        },
        {
          path:'/catagories/:searchTerm',
          element: <SearchBar />

        },
          {
            path: "/carts",
            element: <Cart />,
          },
          {
            path:'/products/:searchItem',
            element:<SearchBar />
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "product/:productId",
        element: <ProductList />,
      },
      {
        path: "/carts/:cartId",
        element: <ForCart />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
