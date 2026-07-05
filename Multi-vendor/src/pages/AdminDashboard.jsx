import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { OrderContext } from "../context/OrderContext";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const {
    products,
    addProduct,
    deleteProduct,
  } = useContext(ProductContext);

  const { orders } = useContext(OrderContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleAddProduct = () => {
    if (!title || !price) return;

    const newProduct = {
      id: Date.now(),
      title,
      price: Number(price),
      thumbnail: image,
      category: "Custom",
    };

    addProduct(newProduct);

    setTitle("");
    setPrice("");
    setImage("");
  };

  const totalSales = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboar</h1>

      <div className="stats">
        <div className="card">
          <h2>{products.length}</h2>
          <p>Products</p>
        </div>

        <div className="card">
          <h2>{orders.length}</h2>
          <p>Orders</p>
        </div>

        <div className="card">
          <h2>₹{totalSales}</h2>
          <p>Sales</p>
        </div>
      </div>

      <div className="add-product">
        <h2>Add Product</h2>

        <input
          placeholder="Product Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button onClick={handleAddProduct}>
          Add Product
        </button>
      </div>

      <div className="product-table">
        <h2>Manage Products</h2>

        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={
                      product.thumbnail ||
                      product.images?.[0]
                    }
                    alt=""
                    width="60"
                  />
                </td>

                <td>{product.title}</td>

                <td>₹{product.price}</td>

                <td>
                  <button
                    onClick={() =>
                      deleteProduct(product.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="orders">
        <h2>Recent Orders</h2>

        {orders.map((order, index) => (
          <div key={index} className="order-card">
            <p>Total: ₹{order.total}</p>
            <p>{order.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}