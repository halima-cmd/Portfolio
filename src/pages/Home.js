import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Propos from '../components/Propos';
import Project from '../components/Projects';
import Processus from '../components/Processus';
import ContactForm from '../components/ContactForm';
import { Button } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Home = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <Propos />
      <Project />
      <Processus />
      <ContactForm />

      <Button
        shape="circle"
        size="large"
        className="fixed bottom-8 right-8 cursor-pointer shadow-lg"
        style={{
          backgroundColor: "#F7A8A8",
          borderColor: "#F7A8A8",
          color: "white",
        }}
        onClick={() => scrollToSection("accueil")}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    </>
  );
};

export default Home;
