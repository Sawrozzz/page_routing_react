import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';



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
    <div className='container'>
    <div className='product_div'>
      <div className="app">
      {products.map((item) => {
        return (
          <>
          <Link to={`/products/${item.id}`}>
            <h1 className='title'>{item.title} </h1>
            </Link>
        </>
        )
      })}
    </div>
        
    </div>
    </div>
    </>
  )
}

export default Products