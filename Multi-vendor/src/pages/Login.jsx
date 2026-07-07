import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = login(email, password);

    if (success) {
      const currentUser = JSON.parse(localStorage.getItem("user"));

      if (currentUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-white to-orange-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Login to your account
        </p>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            Login
          </button>

          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-orange-500 font-semibold hover:underline"
            >
              Register Here
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}