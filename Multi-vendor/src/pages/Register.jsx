import {useState , useContext} from "react"
import { AuthContext} from "../context/AuthContext"
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const {register } = useContext(AuthContext);
    const navigate=useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("");

    const handleRegister=()=>{
        register(email,password,role);
        navigate("/login");
    };
  return (
    <div>Registraion
        <input type="email" placeholder='enter email'  onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='enter password'  onChange={(e)=>setPassword(e.target.value)}/>
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
      </select>   
         <button onClick={handleRegister}>Register</button>
      
    </div>
  )

}