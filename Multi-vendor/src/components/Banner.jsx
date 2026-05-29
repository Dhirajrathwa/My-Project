import { motion } from "framer-motion";
import "./banner.css";
export default function Banner() {
  return (<div className="banner">
    
    <motion.div 
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
><div className="banner-content">
  <h1>Welcome to MyStore</h1>
      
        
        <h1>Welcome to Multi Vendor Store</h1>
        <p>Shop products from multiple trusted vendors</p>
        <button className="shop-btn">Shop Now</button>
      
    </div>
</motion.div>
    </div>
  );
}