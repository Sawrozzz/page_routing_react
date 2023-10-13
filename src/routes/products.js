import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "@mui/material";
// import { Counter } from "../counter";
import { useDispatch } from "react-redux";
import { AddtoCart } from "./cartSlice";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  const onClickAdd = (product) => {
    dispatch(AddtoCart(product));
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data.products);
      });
  }, []);

  const title = products.map((product) => (
    <div key={product.id} style={{ width: '30%', padding: '10px' }}>
        <Card sx={{ minWidth: 275, minHeight: 200 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {product.title}
                </Typography>
                <img
                    src={product.thumbnail}
                    alt=""
                    style={{
                        height: '300px',
                        width: '300px',
                        objectFit: 'cover',
                    }}
                />
                &emsp;
                <Link to={`/product/${product.id}`} size="small">
                    {' '}
                    Show details
                </Link>{' '}
                <br />
                <br />
                <Button onClick={() => onClickAdd(product)} size="small">
                    {' '}
                    Add to cart
                </Button>{' '}
                <br />
                <br />
            </CardContent>
        </Card>
    </div>
))

return (
    <>
        <Typography variant="h5" component="div">
            Available products
            <br />
            Available cart: {carts.length}
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>{title}</div>
    </>
)
}

export default Products;