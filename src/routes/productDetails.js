import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const ProductList = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [productId]);
  return (
    <div className="myproductdetail">
      <div className="productDetails">
        <p>
          {" "}
          <b>Description:</b> {product.description}{" "}
        </p>
        <p>
          <b>Price: </b> {product.price}
        </p>
        <p>
          <b>ID:</b> {productId}
        </p>
        <p>
          <img src={product.thumbnail} alt="" />
        </p>
        <h2> Title: {product.title} </h2>
      </div>
    </div>
  );
};
export default ProductList;