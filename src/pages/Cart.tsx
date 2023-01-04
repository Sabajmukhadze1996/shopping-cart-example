import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { productPropTypes } from "../components/Products";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart);

  const handleRemove = (productId: any) => {
     dispatch(remove(productId))
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product: productPropTypes) => {
          return (
            <div className="cartCard" key={product.id}>
              <img src={product.image} />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => handleRemove(product.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
