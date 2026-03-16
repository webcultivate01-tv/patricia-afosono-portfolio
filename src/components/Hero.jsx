import { motion } from "framer-motion";

export default function Hero() {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Patricia_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-14 pb-24 overflow-hidden"
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              ✨ Brand Strategist & Communication Designer
            </motion.span>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Creating
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Powerful Brand
              </span>
              <br />
              Experiences
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              I'm <b>Patrícia Afonso</b>, a communication designer with
              <b> 20+ years of experience</b> creating impactful brand
              identities, communication strategies, and visual storytelling.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col md:flex-row gap-4"
            >
              <button onClick={scrollToPortfolio} className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-700 transition transform hover:scale-105 hover:shadow-purple-300">
                View Portfolio
              </button>

              <button onClick={downloadResume} className="px-8 py-4 border-2 border-gray-300 rounded-full font-semibold text-gray-800 hover:bg-gray-100 transition transform hover:scale-105">
                Download Resume
              </button>
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="flex gap-10 mt-12"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900">20+</h3>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">100+</h3>
                <p className="text-gray-600 text-sm">Design Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">5+</h3>
                <p className="text-gray-600 text-sm">Global Brands</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="relative"
            >
              {/* ROTATING GRADIENT RING */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-40"
              />

              {/* IMAGE */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/patricia.jpeg"
                  alt="Patricia Afonso"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* FLOATING DESIGN TOOL BADGES */}
              {/* <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-6 -left-6 bg-white shadow-lg px-3 py-2 rounded-xl text-sm font-semibold"
              >
                🎨 Adobe
              </motion.div> */}
{/* 
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -right-6 bg-white shadow-lg px-3 py-2 rounded-xl text-sm font-semibold"
              >
                ✨ Branding
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
