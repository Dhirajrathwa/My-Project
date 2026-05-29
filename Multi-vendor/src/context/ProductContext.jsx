import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {

  const [products, setProducts] = useState([]);

  // ✅ Load from localStorage
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products"));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  // ✅ Add Product
  const addProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];

    setProducts(updatedProducts);

    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  // ✅ Delete Product
  const deleteProduct = (id) => {
    const updated = products.filter(p => p.id !== id);

    setProducts(updated);

    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <ProductContext.Provider 
      value={{ products, addProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}