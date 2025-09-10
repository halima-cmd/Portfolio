import React, { useState, useEffect } from "react";

const Footer = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "portfolio",
        "process",
        "testimonials",
        "contact",
      ];

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="playfair text-2xl font-semibold mb-4">
            Halimatou DIALLO
          </div>
          <p className="text-gray-400 mb-3">
          UX/UI Designer & Front-End Developer
           
          </p>
          <p className="text-gray-400 mb-6">
            Créatrice d'expériences digitales élégantes
          </p>

          <div className="flex justify-center space-x-6 mb-6">
            <button
              onClick={() => scrollToSection("about")}
              className={`${
                activeSection === "about"
                  ? "text-[#F7A8A8]"
                  : "text-gray-400"
              } hover:text-[#F7A8A8] transition-colors cursor-pointer`}
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`${
                activeSection === "portfolio"
                  ? "text-[#F7A8A8]"
                  : "text-gray-400"
              } hover:text-[#F7A8A8] transition-colors cursor-pointer`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${
                activeSection === "contact"
                  ? "text-[#F7A8A8]"
                  : "text-gray-400"
              } hover:text-[#F7A8A8] transition-colors cursor-pointer`}
            >
              Contact
            </button>
          </div>

          <p className="text-gray-500 text-sm">
            © 2024 Halimatou Diallo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
