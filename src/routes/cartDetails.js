import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ForCart = () => {
  const [cart, setCart] = useState({});
  const { cartID } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/carts/${cartID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "hithisis kjaksdjf");
        setCart(data);
      });
  }, [cartID]);
  console.log(cartID);
  console.log(cart, "jhasdkjfkajsdkofjaso");

  // Render the data when it's available
  return (
    <div className="cartDetails">
      <p>
        <b>ID:</b> {cartID}
      </p>
      {cart.products &&
        cart.products.map((product) => {
          return (
            <div>
              <h1>Products:</h1>
              <p className="title">Title:{product.title} </p>
              <p className="title"> Price:{product.price} </p>
              <p className="title"> Quantity:{product.quantity} </p>
              <p className="title">
                Discount Percentage:{product.discountPercentage}{" "}
              </p>
              <p className="title">
                Discounted Price:{product.discountedPrice}{" "}
              </p>
              <p className="title">Total:{product.total} </p>
            </div>
          );
        })}

      <h2> Total Cart: {cart.total} </h2>
      <p>
        {" "}
        <b>Total Discounted :</b> {cart.discountedTotal}{" "}
      </p>
      <p>
        <b>User Id: </b> {cart.userId}
      </p>
      <p>
        <b>Total Products: </b> {cart.totalProducts}
      </p>
      <p>
        <b>Total Quantity: </b> {cart.totalQuantity}
      </p>
    </div>
  );
};

export default ForCart;