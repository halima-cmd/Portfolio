// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclenche l'animation après le montage du composant
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="accueil" className="hero-bg min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Hello, je suis
            <span className="block text-pink-500">Halimatou DIALLO</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            UX/UI Designer & Front-End Developer
          </p>
          <p className="text-lg text-gray-500 max-w-md">
            Je crée des expériences numériques élégantes et intuitives, alliant créativité et expertise technique pour donner vie à vos idées.
          </p>
          <div className="flex space-x-4">
            <Button
              type="primary"
              size="large"
              className="!rounded-button whitespace-nowrap cursor-pointer bg-pink-500 hover:bg-pink-600 border-pink-500 hover:border-pink-600"
            >
              Voir mon travail
            </Button>
            <Button
              size="large"
              icon={<DownloadOutlined />}
              className="!rounded-button whitespace-nowrap cursor-pointer border-pink-300 text-pink-600 hover:border-pink-500 hover:text-pink-700"
            >
              Télécharger mon CV
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20female%20designer%20portrait%20with%20soft%20lighting%2C%20elegant%20pose%2C%20modern%20workspace%20background%2C%20creative%20and%20confident%20expression%2C%20pastel%20color%20palette%2C%20clean%20aesthetic&width=400&height=500&seq=portrait&orientation=portrait"
              alt="Halima"
              className="w-80 h-96 object-cover object-top rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
