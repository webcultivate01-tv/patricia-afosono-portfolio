import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default Home;
