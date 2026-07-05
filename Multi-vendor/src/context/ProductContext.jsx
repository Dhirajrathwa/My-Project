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

const addProduct = (product) => {
  const updated = [...products, product];
  setProducts(updated);
  localStorage.setItem("products", JSON.stringify(updated));
};

const deleteProduct = (id) => {
  const updated = products.filter((p) => p.id !== id);
  setProducts(updated);
  localStorage.setItem("products", JSON.stringify(updated));
};

const updateProduct = (updatedProduct) => {
  const updated = products.map((p) =>
    p.id === updatedProduct.id ? updatedProduct : p
  );

  setProducts(updated);
  localStorage.setItem("products", JSON.stringify(updated));
};
  return (
    <ProductContext.Provider 
      value={{ products, addProduct, deleteProduct, updateProduct,setProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}