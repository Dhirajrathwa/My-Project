import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {

  const { cart, clearCart } = useContext(CartContext);

  const [address, setAddress] = useState("");
  const [placed, setPlaced] = useState(false);

  // ✅ Total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (!address) return alert("Enter address");

    clearCart();
    setPlaced(true);
  };

  // ✅ Empty cart case
  if (cart.length === 0 && !placed) {
    return <h2 style={{ textAlign: "center" }}>Cart is empty</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Checkout</h1>

      {/* Cart Items */}
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Qty: {item.quantity}</p>
          <p>Price: ₹ {item.price}</p>
        </div>
      ))}

      <h2>Total: ₹ {total}</h2>

      {/* Address */}
      <textarea
        placeholder="Enter Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ width: "300px", height: "80px" }}
      />

      <br /><br />

      <button onClick={handleOrder} disabled={placed}>
        {placed ? "Order Placed" : "Place Order"}
      </button>

      {/* Success Message */}
      {placed && (
        <h2 style={{ color: "green" }}>
          🎉 Order Placed Successfully!
        </h2>
      )}
    </div>
  );
}