import React, { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, incrementItem, decrementItem, total } = useContext(CartContext);

  function increment(item) {
    incrementItem(item);
  }

  return (
    <div className="col-md-8 container " style={{minHeight: "50vh"}}>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title} {item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button className="btn btn-sm btn-light mx-1" onClick={() => removeFromCart(item)}>
                    Remove
                  </button>
                  <button className="btn btn-sm btn-light mx-1" onClick={() => increment(item)}>
                    +
                  </button>
                  <button className="btn btn-sm btn-light mx-1" onClick={() => decrementItem(item)}>
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items in the cart</p>
      )}
      <p>Total: ${total} USD</p>
      <Link to={'/checkout'} className="btn btn-success">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;
