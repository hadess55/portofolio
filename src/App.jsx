import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sosmed from "./components/Sosmed";
import ProjectGallery from "./components/ProjectGallery";
import Service from "./components/Service";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen scroll-smooth">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="sosmed">
        <Sosmed />
      </section>
      <section id="projects">
        <ProjectGallery />
      </section>
      <section id="services">
        <Service />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
