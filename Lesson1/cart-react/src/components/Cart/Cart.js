import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

const Cart = (props) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="container">
      
    </div>
  );
};

export default Cart;
