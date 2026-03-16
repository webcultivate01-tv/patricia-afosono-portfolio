import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "patriciaafonogoncalves@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+351 966 534 437",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lisbon, Portugal",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  emailjs.init("UUIPve7XghQvcqLTA");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_message: formData.message,
        reply_to: formData.email,
      };

      console.log("Sending with params:", templateParams);

      const response = await emailjs.send(
        "service_ufne109",
        "template_fm829dw",
        templateParams,
      );

      console.log("Response:", response);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Full Error:", error);
      alert(`Error: ${error.text || error.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let's <span className="text-purple-600">Work Together</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Have a project in mind? Let’s collaborate and create something
            meaningful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none resize-none"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            {contacts.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition"
                >
                  {/* icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100">
                    <Icon size={22} className="text-purple-600" />
                  </div>

                  {/* text */}
                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="font-semibold text-gray-900">{item.value}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* freelance card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-xl border border-purple-200 bg-purple-50"
            >
              <h3 className="font-semibold text-purple-700 text-lg">
                Available for Freelance Projects
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Branding, visual identity, communication strategy and creative
                design.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
