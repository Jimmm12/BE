import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import "./CartPage.css";
import { AiOutlineDelete } from "react-icons/ai";
const CartPage = (props) => {
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;

  const onDeleteCartItem = (id) => {
    const action = {
      type: "DELETE_CART_ITEM",
      payload: { id },
    };
    dispatch(action);
  };
  const onPlusQuantily = (id) => {
    const action = {
      type: "PLUS_QUANTITY",
      payload: id ,
    };
    dispatch(action);
  };
  const onMinusQuantily = (id) => {
    const action = {
      type: "MINUS_QUANTITY",
      payload: id ,
    };
    dispatch(action);
  };

  const cartBody =
    cart &&
    cart.map((cartItem, index) => {
      const { name, price, img, quantily, id } = cartItem;
      return (
        <tr>
          <th scope="row">{index}</th>
          <td>{name}</td>
          <td>
            <img
              src={img}
              style={{ width: "30px", height: "100%" }}
              alt={name}
            />
          </td>
          <td className="d-flex">
            <button className="btn btn-primary"
             onClick={() => onMinusQuantily(id)}
             >
              -
             </button>
            <span className="mx-2">{quantily}</span>
            <button
              className="btn btn-primary"
              onClick={() => onPlusQuantily(id)}
            >
              +
            </button>
          </td>
          <td>{quantily * Number(price)}</td>
          <td>
            <button
              className="btn btn-danger rounded-circle"
              onClick={() => onDeleteCartItem(id)}
            >
              <AiOutlineDelete />
            </button>
          </td>
        </tr>
      );
    });

  return (
    <div className="container">
      <h4 className="mb-4"> Cart</h4>
      <div className="cart-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">...</th>
            </tr>
          </thead>
          <tbody>{cartBody}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
