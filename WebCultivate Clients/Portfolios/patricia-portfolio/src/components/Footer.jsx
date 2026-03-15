import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-100 pt-20 pb-10 overflow-hidden">
      {/* background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Patrícia Afonso
            </h3>

            <p className="text-gray-600 max-w-md">
              Communication designer and brand strategist creating meaningful
              visual identities and impactful brand experiences.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/patricia-afonso-graphic-designer/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border shadow-sm hover:bg-purple-600 hover:text-white transition"
              >
                <Linkedin size={18} />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.instagram.com/pat_afonso/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border shadow-sm hover:bg-purple-600 hover:text-white transition"
              >
                <Instagram size={18} />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:patriciaafonsogoncalves@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border shadow-sm hover:bg-purple-600 hover:text-white transition"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-gray-900 mb-4 relative inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-1 w-8 h-[3px] bg-purple-600 rounded-full"></span>
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-purple-600 transition"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-purple-600 transition"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:text-purple-600 transition"
                >
                  Portfolio
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-purple-600 transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-semibold text-gray-900 mb-4 relative inline-block">
              Contact
              <span className="absolute left-0 -bottom-1 w-8 h-[3px] bg-pink-500 rounded-full"></span>
            </h4>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <Mail size={16} /> patriciaafonsogoncalves@gmail.com
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} /> +351 966 534 437
              </li>

              <li className="flex items-center gap-2">
                <MapPin size={16} /> Lisbon, Portugal
              </li>
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} Patrícia Afonso. All rights reserved.
          </p>

          {/* SCROLL TOP */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollTop}
            className="mt-4 md:mt-0 w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white shadow-md hover:bg-purple-700 transition"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
