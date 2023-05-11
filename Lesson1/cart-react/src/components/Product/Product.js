import React, { useContext } from "react";
import CartContext from '../../context/cart/CartContext'




const Product = (props) => {
  // Context 
  const CartCtx = useContext(CartContext)
  const { dispatch } = CartCtx

  const { product } = props
  const { name, price, img, id} = product;
  const formatedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);


  const onAddToCart = (product) => {
    console.log({product});
    const action = {
      type: "ADD_TO_CART",
      payload: product,
    };
    dispatch(action)
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="price mb-2">
          <span>{formatedPrice}</span>
        </div>
        <div className="d-flex align-items-center justify-content-between ">
          <button  className="btn btn-danger w-100"
            onClick={() => onAddToCart(product)}
          >
            Add to cart
          </button>
          <button className="btn btn-primary w-100" onClick={() => props.onViewProductDetail(id)}>
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
