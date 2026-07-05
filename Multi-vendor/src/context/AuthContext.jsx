import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  // Load data from localStorage when app starts
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user")) || null;
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    setUser(savedUser);
    setUsers(savedUsers);
  }, []);

  // Register
  const register = (email, password, role) => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const exists = savedUsers.find((u) => u.email === email);

    if (exists) {
      alert("User already exists!");
      return;
    }

    const newUser = {
      email,
      password,
      role,
    };

    const updatedUsers = [...savedUsers, newUser];

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registered Successfully!");
  };

  // Login
  const login = (email, password) => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = savedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
      return true;
    } else {
      alert("Invalid Email or Password");
      return false;
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}