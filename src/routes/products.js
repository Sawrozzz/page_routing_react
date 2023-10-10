import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "@mui/material";
// import { Counter } from "../counter";
import { useDispatch } from "react-redux";
import { AddtoCart } from "./cartSlice";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  // const [add, setAdd] = useState([]);
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  const onClickAdd = (buy) => {
    // setAdd(add.concat(buy));
    dispatch(AddtoCart(buy));
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="app">
          {products.map((item) => {
            return (
              <>
                <Card variant="outlined">
                  <p>{item.title}</p>
                  {<img src={item.thumbnail} />}{" "}
                  <button
                    onClick={() => {
                      onClickAdd(item);
                    }}
                  >
                    Add To Cart
                  </button>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
