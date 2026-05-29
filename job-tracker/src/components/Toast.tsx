import { useEffect } from "react";

export default function Toast({ message, clear }: any) {
  useEffect(() => {
    const timer = setTimeout(() => clear(), 2000);
    return () => clearTimeout(timer);
  }, [message]);

  if (!message) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      background: "#333",
      color: "#fff",
      padding: "10px 15px",
      borderRadius: "6px"
    }}>
      {message}
    </div>
  );
}