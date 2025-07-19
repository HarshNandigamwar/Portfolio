import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Project.css";
import Sigma from "../../assets/sigma ai.jpg";
import cc from "../../assets/currency converter .jpg";
import weather from "../../assets/weather app.jpg";
import sigmaMart from "../../assets/SigmaMart.png";

const Projects = () => {
  return (
    <div className="project p-[20px] mt-16   ">
      <h1 className="text-5xl text-blue-500 font-bold flex items-center justify-center mb-[10px]">
        Projects
      </h1>

      <div className="projectDiv ">
        <ProjectCard
          img={Sigma}
          projectName="Sigma AI"
          alt="Sigma AI"
          info="It Is A smart and interactive chatbot designed to provide quick, accurate, and engaging responses to users."
          liveLink="https://sigma-ai-by-shriharsh.netlify.app/"
          gitLink="https://github.com/HarshNandigamwar/Sigma-AI"
        />

        <ProjectCard
          img={cc}
          projectName="Currency Converter"
          alt="Currency Converter"
          info="Quickly convert currencies on-the-go Get up-to-date exchange rates for countries worldwide."
          liveLink="https://shriharsh-currency-converter.netlify.app/"
          gitLink="https://github.com/HarshNandigamwar/Currency-Converter"
        />

        <ProjectCard
          img={weather}
          projectName="Weather app"
          alt="Weather app"
          info="Check the weather forecast anytime anywhere. Get accurate and up-to-date weather updates for your location."
          liveLink="https://weather-app-shriharsh.netlify.app/"
          gitLink="https://github.com/HarshNandigamwar/Weather-App"
        />

        <ProjectCard
          img={sigmaMart}
          projectName="E-Commerce app"
          alt="E-Commerce app"
          info="This is a dynamic E-Commerce web application built with React.js, designed to deliver a smooth and engaging shopping experience."
          liveLink="https://sigma-mart.vercel.app/"
          gitLink="https://github.com/HarshNandigamwar/Sigma-mart"
        />
      </div>
    </div>
  );
};

export default Projects;
