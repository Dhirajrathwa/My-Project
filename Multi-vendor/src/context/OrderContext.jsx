import { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

export default function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const addOrder = (order) => {
    const updated = [...orders, order];

    setOrders(updated);

    localStorage.setItem(
      "orders",
      JSON.stringify(updated)
    );
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}