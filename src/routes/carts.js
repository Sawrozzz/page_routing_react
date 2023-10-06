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
          carts.map((cart)=>{
            return(
              <>
              <Link to={`/carts/${cart.id}`}>
              {
                cart.products.map((product)=>{
                  return(
                    <>
                    <h1 className="title">{product.title} </h1>
                    </>
                  )
                })
              }
        
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
