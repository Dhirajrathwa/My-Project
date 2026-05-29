import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function Admin() {

  const { addProduct } = useContext(ProductContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = () => {
    const newProduct = {
      id: Date.now(),
      title,
      price,
      thumbnail: image,
    };

    addProduct(newProduct);

    alert("Product Added");

    setTitle("");
    setPrice("");
    setImage("");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>

      <h3>Add Product</h3>

      <input
        placeholder="Product Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br /><br />

      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
}
