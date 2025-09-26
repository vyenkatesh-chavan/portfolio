import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus(
            `❌ Failed to send: ${error.text || error.message || "Unknown error"}`
          );
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Contact Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full mb-4 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full mb-4 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message..."
              rows={5}
              className="w-full mb-4 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            {status && (
              <p
                className={`mt-4 text-center font-medium ${
                  status.startsWith("✅") ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center space-x-4">
              <Mail className="text-red-400" size={24} />
              <div>
                <p className="font-bold text-white">Email</p>
                <p className="text-gray-300">vyankateshc21@gmail.com</p>
              </div>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center space-x-4">
              <Github className="text-gray-300" size={24} />
              <div>
                <p className="font-bold text-white">GitHub</p>
                <a
                  href="https://github.com/vyenkatesh-chavan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  github.com/vyenkatesh-chavan
                </a>
              </div>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center space-x-4">
              <Linkedin className="text-blue-500" size={24} />
              <div>
                <p className="font-bold text-white">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/vyenkatesh-chavan-54813a2b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  linkedin.com/in/vyenkatesh-chavan-54813a2b8
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
