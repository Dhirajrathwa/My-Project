import React from 'react'
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
export default function Login() {
  const {login,user}=useContext(AuthContext);
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin=()=>{
    login(email,password);
  };
  useEffect(()=>{
    if (user?.role==="admin") {
      navigate("/admin")
    }else if(user?.role==="customer"){
      navigate("/");
    }
  },[user])
  return (
    <div>
      <h2>Login</h2>
       <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />
    
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
    
          <button onClick={handleLogin}>Login</button>
           <p style={{ marginTop: "15px" }}>
        Don't have an account?{" "}
        <Link to="/register" style={{ color: "blue", cursor: "pointer" }}>
          Register here
        </Link>
      </p>
        </div>
  );
};
