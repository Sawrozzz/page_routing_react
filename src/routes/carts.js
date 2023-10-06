import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


const Cart = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCarts(data.carts);
      });
  }, []);

  return (
    <>
      <div className="cart-content">
        {
          carts.map((item)=>{
            return(
              <>
              <Link to={`/carts/${item.id}`}>
              <p className="title"> cartID {item.id}</p>
              </Link>
              </>
            )
          })
        }
        
      </div>
    </>
  );
};

export default Cart;
