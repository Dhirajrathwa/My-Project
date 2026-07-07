

  import { useState } from "react";

export default function ContactSection({ title = "Contact Us" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-4xl font-bold text-center text-gray-800">
          {title}
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-8">
          We'd love to hear from you. Fill out the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>

          {success && (
            <p className="text-green-600 text-center font-medium">
               Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}