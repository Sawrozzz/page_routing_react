import React from "react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [carts, setCarts] = useState([]);
  // const [name, setName] = useState("");
  const [cartId, setCartId] = useState(1);
  useEffect(() => {
    fetch(`https://dummyjson.com/carts/${cartId}`)
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
        console.log(data);
      });
  }, [cartId]);
  const handleClick = (id) => {
    setCartId(id)
  };

  return (
    <div>
      <div className="content">
        <p>ID={carts.id}</p>
        <p>Total Quantity  = {carts.totalQuantity}</p>
        <p>Total Product = {carts.totalProducts}</p>
        <p> {carts.total}</p>
        <br></br>
        <div>
        <button onClick={() => handleClick(1)}>Show product 1</button>
        <button onClick={() => handleClick(2)}>Show product 2</button>
        <button onClick={() => handleClick(3)}>Show product 3</button>
        <button onClick={() => handleClick(4)}>Show product 4</button>
      </div>
      </div>
    </div>
  );
};

export default Contact;
