import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [add, setAdd] = useState([]);
  const onClickAdd = (buy) => {
    setAdd(add.concat(buy));
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
        <div className="buyitem"><span>Add what you want to buy:</span>{add.length}</div>

          {products.map((item) => {
            return (
              <>
                <Link to={`/products/${item.id}`}>
                  <Card variant="outlined">
                    <p>{item.title}</p>
                    {<img src={item.thumbnail} />}{" "}
                  </Card>
          
                </Link>
                <button
                  onClick={() => {
                    onClickAdd(item);
                  }}
                >
                  Add To Cart
                </button>
              </>
            );
          })}
        </div>

      </div>
    </>
  );
};

export default Products;
