import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "./ProductDetails.css";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleAdd = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="productsdetail">

      {/* Image */}
      <div className="product-image">
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      {/* Info */}
      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h1 className="product-title">
          {product.title}
        </h1>

        <p className="product-description">
          {product.description}
        </p>

        <h2 className="product-price">
          ₹ {product.price}
        </h2>

        <p className="product-rating">
          ⭐ Rating: {product.rating}
        </p>

        <p className="product-stock">
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        <button
          onClick={handleAdd}
          className={`product-btn ${added ? "added-btn" : ""}`}
        >
          {added ? "Added ✅" : "Add To Cart"}
        </button>

      </div>
    </div>
  );
}