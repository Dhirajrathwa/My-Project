import { Link } from "react-router-dom";
import "./navbar.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
export default function Navbar() {
  const { user, logout } = useContext(AuthContext)

  const { cart } = useContext(CartContext)
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link></>
        )}
        {user && (
          <><span style={{ color:"white" }}>
            Hello, {user.email}
          </span><button
            onClick={logout}
            style={{
             
              background: "orange",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer"
            }}
          >
              Logout
            </button>
          </>
        )

        }
        <div>

        </div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Cart">Cart ({count})</Link>

      </div>
    </nav>

  );
}