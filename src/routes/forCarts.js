import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ForCart = () => {
  const [cart, setCart] = useState({});
  const {cartID} = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/carts/${cartID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCart(data);
      });
  }, [cartID]);
  

  // Render the data when it's available
  return (
    <div className="cartDetails">
      <p><b>ID:</b> {cartID}</p>
     <h2> Title: {cart.title} </h2> 
      <p> <b>Quantity:</b> {cart.quantity} </p>
      <p>
        <b>Price: </b> {cart.price}
      </p>

    </div>
  );
}

export default ForCart;
