import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeItem
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Cart is Empty 🛒
      </h2>
    );
  }

  return (
    <div className="cart-container">

      <h1 className="cart-title">My Cart</h1>

      <div className="cart-items">

        {cart.map(item => (

          <div className="cart-card" key={item.id}>

            <img
              src={item.thumbnail || item.images?.[0]}
              alt={item.title}
            />

            <div className="cart-info">

              <h3>{item.title}</h3>

              <p className="cart-price">
                ₹ {item.price}
              </p>

              {/* Quantity */}
              <div className="qty-controls">

                <button onClick={() => decreaseQty(item.id)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQty(item.id)}>
                  +
                </button>

              </div>

              {/* Remove */}
              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Total */}
      <div className="cart-total">

        <h2>Total: ₹ {total.toFixed(2)}</h2>

        <Link to="/checkout">
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </Link>

      </div>

    </div>
  );
}