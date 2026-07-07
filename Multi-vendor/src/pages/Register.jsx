import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  const handleRegister = () => {
    register(email, password, role);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-white to-orange-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Register to continue shopping
        </p>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>

          <button
            onClick={handleRegister}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Register
          </button>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-500 font-semibold hover:underline"
            >
              Login Here
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}