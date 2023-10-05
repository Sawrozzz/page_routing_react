import * as React from "react";
import * as ReactDOM from "react-dom/client";
import  Header  from "./Header"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Contact from "./routes/contact";
import Card from "./routes/card";

const router = createBrowserRouter([
  {
    path:"products/:productId",
    element : <div>For</div>
  },

  {
    path: "/",
    element:<Root />,
    children: [
      {
        path: "products/",
        element: <Contact />,
      },
      {
        path: "carts/:cartId",
        element: <Card />

      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

  <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);