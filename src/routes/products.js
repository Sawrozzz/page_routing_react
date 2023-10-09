import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
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
                  <Link to={`/products/${item.id}`}>
                    <Card variant="outlined"><p>{item.title}</p>{<img src={item.thumbnail}/>} </Card>
                  </Link>
                </>
              );
            })}

        </div>
      </div>
    </>
  );
};

export default Products;