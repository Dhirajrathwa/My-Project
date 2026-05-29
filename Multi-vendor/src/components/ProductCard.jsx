import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useContext,useState } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  const image = product.images?.[0] || product.thumbnail;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="product-card"
    >

      <Link to={`/product/${product.id}`} className="product-link">

        <img src={image} alt={product.title} />

        <p className="product-category">{product.category}</p>

        <h3>{product.title}</h3>

        <p className="price">₹ {product.price}</p>

      </Link>

      <button
        onClick={handleAdd}
        className={added ? "added-btn" : ""}
      >
        {added ? "Added ✅" : "Add To Cart"}
      </button>

    </motion.div>
  );
}