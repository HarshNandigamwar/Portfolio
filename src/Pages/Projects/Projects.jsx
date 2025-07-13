import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Project.css";
import Sigma from "../../assets/sigma ai.jpg";
import cc from "../../assets/currency converter .jpg";
import weather from "../../assets/weather app.jpg";
import sigmaMart from "../../assets/SigmaMart.png";

const Projects = () => {
  return (
    <div id="projects" className="p-[20px] mt-[31px]   ">
      <h1 className="text-5xl text-cyan-300 flex items-center justify-center mb-[10px]">
        Projects
      </h1>

      <div className="projectDiv ">
       

        {/* <div className="bg-[#1a1a1a] p-[15px] rounded-2xl flex flex-col items-center mt-[20px] mb-[20px] h-[500px] lg:w-[320px] ">
          <div>
            <img
              src={cc}
              alt="N/A"
              className="h-[170px] w-[320px] rounded-xl "
            />
          </div>
          <div>
            <h2 className="flex justify-center mt-[15px] text-3xl text-cyan-300">
              Currency Converter
            </h2>
            <p className="flex justify-center items-center font-[13px] mt-[10px]">
              Quickly convert currencies on-the-go Get up-to-date exchange rates
              for countries worldwide.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-[20px]">
            <a
              href="https://github.com/HarshNandigamwar/Currency-Converter"
              target="_blank"
            >
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="Github"
                className="githubImg mb-[10px] h-[50px]"
              />
            </a>
            <a
              href="https://shriharsh-currency-converter.netlify.app/"
              target="_blank"
            >
              <button className=" p-[0.3rem] rounded-[8px] bg-white text-[1rem] border-[2px] border-cyan-300 text-black">
                Live Preview
              </button>
            </a>
          </div>
        </div> */}

        {/* <div className="bg-[#1a1a1a] p-[15px] rounded-2xl flex flex-col items-center mt-[20px] mb-[20px] h-[500px] lg:w-[320px] ">
          <div>
            <img
              src={weather}
              alt="N/A"
              className="h-[170px] w-[320px] rounded-xl "
            />
          </div>
          <div>
            <h2 className="flex justify-center mt-[15px] text-3xl text-cyan-300">
              Weather app
            </h2>
            <p className="flex justify-center items-center font-[13px] mt-[10px]">
              Check the weather forecast anytime anywhere. Get accurate and
              up-to-date weather updates for your location.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-[20px]">
            <a
              href="https://github.com/HarshNandigamwar/Weather-App"
              target="_blank"
            >
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="Github"
                className="githubImg mb-[10px] h-[50px]"
              />
            </a>
            <a
              href="https://weather-app-shriharsh.netlify.app/"
              target="_blank"
            >
              <button className=" p-[0.3rem] rounded-[8px] bg-white text-[1rem] border-[2px] border-cyan-300 text-black">
                Live Preview
              </button>
            </a>
          </div>
        </div> */}

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
          liveLink="https://sigmamart.netlify.app/"
          gitLink="https://github.com/HarshNandigamwar/Sigma-mart"
        />

        {/* <div className="bg-[#1a1a1a] p-[15px] rounded-2xl flex flex-col items-center mt-[20px] mb-[20px] h-[500px] lg:w-[320px] ">
          <div>
            <img
              src={sigmaMart}
              alt="N/A"
              className="h-[170px] w-[320px] rounded-xl "
            />
          </div>
          <div>
            <h2 className="flex justify-center mt-[15px] text-3xl text-cyan-300">
              E-Commerce app
            </h2>
            <p className="flex justify-center items-center font-[13px] mt-[10px]">
              This is a dynamic E-Commerce web application built with React.js,
              designed to deliver a smooth and engaging shopping experience.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-[13px]">
            <a
              href="https://github.com/HarshNandigamwar/Sigma-mart"
              target="_blank"
            >
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="Github"
                className="githubImg mb-[10px] h-[50px]"
              />
            </a>
            <a href="https://sigmamart.netlify.app/" target="_blank">
              <button className=" p-[0.3rem] rounded-[8px] bg-white text-[1rem] border-[2px] border-cyan-300 text-black">
                Live Preview
              </button>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
