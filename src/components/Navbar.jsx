import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/70 backdrop-blur-xl border-b border-gray-200 fixed w-full top-0 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* LOGO */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
            >
              Patrícia Afonso
            </motion.button>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-gray-700 font-medium hover:text-purple-600 transition"
                >
                  {item.label}

                  {/* underline hover */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all duration-300 hover:w-full"></span>
                </motion.button>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* BACKDROP */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsOpen(false)}
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl"
            >
              <div className="pt-20 px-8 space-y-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-800 text-lg font-medium hover:text-purple-600 transition"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
