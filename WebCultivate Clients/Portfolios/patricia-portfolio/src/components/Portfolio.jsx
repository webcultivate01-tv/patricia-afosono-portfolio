import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    category: "Branding",
  },
  {
    url: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    category: "Logos",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408171/Ilustra_Natal_copiar_hffecl.png",
    category: "Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408153/cenario_park1_ehzwqk.png",
    category: "Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408151/Glass_jar_wvciw7.png",
    category: "Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408151/smashed_can_bmmt7i.png",
    category: "Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408150/bottle_fawyjm.png",
    category: "Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408149/bisnaga_l0cdnw.png",
    category: "Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408147/2026_ilustra%C3%A7ao_Pessoas_su5c6a.png",
    category: "Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408146/2026_ilustra%C3%A7ao_Mundo_Verde_xb5w2i.png",
    category: "Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408144/2012_Ilustra%C3%A7%C3%A3o_para_capa_de_um_livro_fcjhev.png",
    category: "Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408143/1996_Album_Gr%C3%A1fico_Set%C3%BAbal_zjlgo8.gif",
    category: "Illustration",
  },

  {
    url: "https://images.unsplash.com/photo-1505238680356-667803448bb6",
    category: "Editorial",
  },
  {
    url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    category: "Animation",
  },
  {
    url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    category: "Signage",
  },
  {
    url: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
    category: "Photo Editing",
  },
  {
    url: "https://images.unsplash.com/photo-1505238680356-667803448bb6",
    category: "Merchandising",
  },
  {
    url: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    category: "Employer Branding",
  },
];

const categories = [
  "All",
  "Branding",
  "Fleet",
  "Editorial",
  "Publications",
  "Icons",
  "Logos",
  "Signage",
  "Animation",
  "Merchandising",
  "Employer Branding",
  "Photo Editing",
  "Video Making",
  "Illustration",
  "Profile Photos",
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const nextImage = () => {
    setSelected((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setSelected(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length,
    );
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="portfolio" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-purple-100 text-purple-700 rounded-full">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            Featured
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Work
            </span>
          </h2>

          <div className="h-1 w-28 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-xl mx-auto text-lg">
            Selected branding and communication design projects showcasing
            strategy, creativity, and visual storytelling.
          </p>
        </motion.div>
        {/* CATEGORY FILTER */}
        {/* MODERN CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border

      ${
        activeCategory === cat
          ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white border-transparent shadow-lg"
          : "bg-white/60 text-gray-700 border-gray-200 hover:border-purple-300 hover:text-purple-600"
      }`}
            >
              {cat}

              {/* Active glow */}
              {activeCategory === cat && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 -z-10 blur-md opacity-40"
                />
              )}
            </motion.button>
          ))}
        </div>
        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredImages.slice(0, visibleCount).map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelected(index)}
            >
              <img
                src={img.url}
                alt="portfolio"
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                <div className="text-white transform translate-y-6 group-hover:translate-y-0 transition duration-500">
                  <h3 className="text-lg font-semibold">{img.category}</h3>
                  <p className="text-sm text-gray-200">
                    Creative Design Project
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* VIEW MORE BUTTON */}
        {visibleCount < filteredImages.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={loadMore}
              className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-700 transition transform hover:scale-105"
            >
              View More Work
            </button>
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-8 right-10 text-white text-4xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <button
              className="absolute left-10 text-white text-6xl"
              onClick={prevImage}
            >
              ‹
            </button>

            <motion.img
              key={selected}
              src={filteredImages[selected].url}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-h-[85vh] rounded-xl shadow-2xl"
            />

            <button
              className="absolute right-10 text-white text-6xl"
              onClick={nextImage}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
