import { useState } from "react";
import "./Contact.css";

export default function ContactSection({ title = "Contact Us" }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="contact-container">

      <h2 className="contact-title">{title}</h2>
      <p className="contact-subtitle">We’d love to hear from you</p>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />

        <button type="submit">Send Message</button>

        {success && (
          <p className="contact-success">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}