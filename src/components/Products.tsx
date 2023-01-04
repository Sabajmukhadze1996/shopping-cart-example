import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

export type productPropTypes = {
  id?: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: object;
  title: string;
};

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const data = await res.data;
        setProducts(data);
      } catch (err: any) {
        console.log("Please refresh the page", err.response);
      }
    };
    fetchProducts();
  }, []);

  const handleAdd = (product: productPropTypes) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product: productPropTypes) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="product-img" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn">
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
