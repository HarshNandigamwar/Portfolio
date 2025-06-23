import React from "react";
import "./Project.css";
import Sigma from "../../assets/sigma ai.jpg";
import cc from "../../assets/currency converter .jpg";
import weather from "../../assets/weather app.jpg";
import soon from "../../assets/soon.jpg";
import git from "../../assets/github.png";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.utils.toArray(".reveal-section").forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div id="projects" className="p-[20px] mt-[31px]   ">
      <h1 className="text-5xl text-cyan-300 flex items-center justify-center mb-[10px]">
        Project
      </h1>
      <div className="lg:flex lg:gap-[40px] lg:ml-[6px]">
        <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col items-center mt-[20px] mb-[20px] lg:w-[300px] ">
          <div>
            <img
              src={Sigma}
              alt="N/A"
              className="h-[170px] w-[320px] rounded-xl "
            />
          </div>
          <div>
            <h2 className="flex justify-center mt-[10px] text-3xl text-cyan-300">
              SIGMA AI
            </h2>
            <p className="flex justify-center items-center font-[13px] mt-[10px]">
              It Is A smart and interactive chatbot designed to provide quick,
              accurate, and engaging responses to users.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <a href="https://github.com/HarshNandigamwar/Sigma-AI">
              <img src={git} className="githubImg invertColor h-[50px]" />
            </a>
            <a href="https://sigma-ai-by-shriharsh.netlify.app/">
              <button className=" p-[0.3rem] rounded-[8px] bg-white text-[1rem] border-[2px] border-cyan-300 text-black">
                Live Preview
              </button>
            </a>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col items-center mt-[20px] mb-[20px]  lg:w-[300px] ">
          <div>
            <img
              src={cc}
              alt="N/A"
              className="h-[170px] w-[320px] rounded-xl "
            />
          </div>
          <div>
            <h2 className="flex justify-center mt-[10px] text-3xl text-cyan-300">
              Currency Converter
            </h2>
            <p className="flex justify-center items-center font-[13px] mt-[10px]">
              Quickly convert currencies on-the-go Get up-to-date exchange rates
              for countries worldwide.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <a href="https://github.com/HarshNandigamwar/Currency-Converter">
              <img src={git} className="githubImg invertColor h-[50px]" />
            </a>
            <a href="https://shriharsh-currency-converter.netlify.app/">
              <button className=" p-[0.3rem] rounded-[8px] bg-white text-[1rem] border-[2px] border-cyan-300 text-black">
                Live Preview
              </button>
            </a>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col items-center mt-[20px] mb-[20px]  lg:w-[300px] ">
          <div>
            <img
              src={weather}
              alt="N/A"
              className="h-[170px] w-[320px] rounded-xl "
            />
          </div>
          <div>
            <h2 className="flex justify-center mt-[10px] text-3xl text-cyan-300">
              Weather app
            </h2>
            <p className="flex justify-center items-center font-[13px] mt-[10px]">
              Check the weather forecast anytime anywhere. Get accurate and
              up-to-date weather updates for your location.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <a href="https://github.com/HarshNandigamwar/Weather-App">
              <img src={git} className="githubImg invertColor h-[50px]" />
            </a>
            <a href="https://weather-app-shriharsh.netlify.app/">
              <button className=" p-[0.3rem] rounded-[8px] bg-white text-[1rem] border-[2px] border-cyan-300 text-black">
                Live Preview
              </button>
            </a>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col items-center mt-[20px] mb-[20px] h-[400px]  lg:w-[300px] ">
          <div>
            <img
              src={soon}
              alt="N/A"
              className="h-[170px] w-[320px] rounded-xl "
            />
          </div>
          <div>
            <h2 className="flex justify-center mt-[10px] text-3xl text-cyan-300">
              New Project
            </h2>
            <p className="flex justify-center items-center font-[13px] mt-[10px]">
              Coming Soon...
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            {/* <a href="https://github.com/HarshNandigamwar/Sigma-AI">
              <img src={git} className="githubImg invertColor h-[50px]" />
            </a> */}
            <a href="#project">
              <button className=" p-[0.3rem] rounded-[8px] bg-white text-[1rem] border-[2px] border-cyan-300 text-black">
                Coming Soon...
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
