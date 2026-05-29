import ContactSection from "../components/ContactSection";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
        <button onClick={() => navigate("/")} >
          Back to Home
        </button>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>

      {/* reuse same component */}
      <ContactSection />
    </div>
  );
}