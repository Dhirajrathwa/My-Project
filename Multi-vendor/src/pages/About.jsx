import { useNavigate } from "react-router-dom";
import "./About.css"
export default function About() {
    const navigate = useNavigate();
  return (
    <div className="about-container">
        <button  className="back" onClick={() => navigate("/")} >
          Back
        </button>
      <h1 className="about-title">About Us</h1>

      <p className="about-subtitle">
        Learn more about our company and mission.
      </p>

      <div className="about-section">
        <div className="about-text">
          <p>
            This is a modern multi-vendor e-commerce platform built using React.
            Users can browse products, add items to cart, and place orders.
            Admins can manage products dynamically.
          </p>
        </div>
        <div className="about-image">
          <img src="https://www.hyperlinkinfosystem.com/assets/upload/services_assets/service_main_image/prestashop-development-company.jpg" alt="About Us" />
        </div>
      </div>

      <div className="about-card-container">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>To provide a seamless shopping experience for our customers.</p>
        </div>
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>To be the leading e-commerce platform in the industry.</p>
        </div>
      </div>
     
    </div>
  );
}