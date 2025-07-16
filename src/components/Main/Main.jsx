import React from "react";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Skills from "../../Pages/Skills/Skills";
import Projects from "../../Pages/Projects/Projects";
import Contact from "../../Pages/Contact/Contact";
const Main = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Main;
