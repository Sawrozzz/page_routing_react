import { useSelect } from "@mui/base";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { RemovefromCart } from "./cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  // const [carts, setCarts] = useState([]);
  // useEffect(() => {
  //   fetch('https://dummyjson.com/carts')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCarts(data.carts);
  //     });
  // }, []);
  const dispatch = useDispatch();
  // console.log("its ok")

  const carts = useSelector((state) => state.cart.carts);
  const onClickRemove = (remove) => {
    dispatch(RemovefromCart(remove));
    // console.log("its absouletely fine");
  };

  return (
    <>
    <h3 className="forcardtotal">Total Carts Selected:{carts.length}</h3>
      <div className="totalcarts">
        {carts.map((item) => {
          return (
            <>
              <Card variant="outlined">
                <div className="all-cart">
                  <p>
                    <b className="cart-id">ID:</b> {item.id}
                  </p>
                  <p className="cart-title">Title:{item.title}</p>{" "}
                  {<img className="cart-img" src={item.thumbnail} />}{" "}
                  <p>
                    <b className="cart-price">Price: </b> {item.price}
                  </p>{" "}
                  <p>
                    <b className="cart-des">Description:</b>
                    {item.description}
                  </p>
                  <button
                    onClick={() => {
                      onClickRemove(item);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
