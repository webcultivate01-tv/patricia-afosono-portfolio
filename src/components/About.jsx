
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const profileImages = [
  "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408119/PA_20230928_2_pn1ic6.png",
  "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408119/PA_20221228_1_nbeyzb.png",
  "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408119/PA_20230928_3_naumas.png"
];

export default function About() {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % profileImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-b from-white to-purple-50 overflow-hidden"
    >

      {/* background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 blur-3xl opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About <span className="text-purple-600">Me</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A passionate communication designer dedicated to building meaningful
            brand identities and powerful visual stories.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* glowing ring */}
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30"></div>

              <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">

                <AnimatePresence mode="wait">

                  <motion.img
                    key={currentImage}
                    src={profileImages[currentImage]}
                    alt="Patricia Afonso"
                    className="w-full h-full object-cover absolute"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />

                </AnimatePresence>

              </div>

            </div>

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              Communication Designer & Brand Strategist
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              I'm <b>Patrícia Afonso</b>, a communication designer with over
              <b> 20 years of experience</b> helping organizations build strong,
              consistent, and memorable brands through strategic design.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              I have worked with international companies including
              <b> Groundforce Portugal</b>, <b>Menzies Aviation</b>, and
              <b> Gestavia</b>, leading branding initiatives, visual identity
              projects, and communication strategies.
            </p>

            {/* SKILL CARDS */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white/70 backdrop-blur-lg border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-lg transition">
                🎨 Adobe Creative Cloud
              </div>

              <div className="bg-white/70 backdrop-blur-lg border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-lg transition">
                ✨ Brand Strategy
              </div>

              <div className="bg-white/70 backdrop-blur-lg border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-lg transition">
                🌐 WordPress
              </div>

              <div className="bg-white/70 backdrop-blur-lg border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-lg transition">
                🧠 Visual Communication
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

