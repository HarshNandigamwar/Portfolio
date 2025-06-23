import React, { useEffect } from "react";
import "./Skills.css";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JS from "../../assets/js.png";
import ReactImg from "../../assets/react.png";
import Tailwind from "../../assets/tailwindcss.png";
import BootStrap from "../../assets/bootstrap.png";
import Git from "../../assets/git.png";
import Github from "../../assets/github.png";
import VScode from "../../assets/vscode.png";
import Problem from "../../assets/problem2.jpg";
import Commun from "../../assets/comunication.jpg";
import API from "../../assets/api.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
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
    <div id="skills" className="p-[20px] mt-[35px] flex flex-col items-center">
      <div className="flex items-center justify-center text-5xl text-cyan-300 mb-[20px]">
        Skills
      </div>

      <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col gap-[10px] reveal-section lg:w-[500px]">
        <h1 className="flex items-center justify-center text-2xl">Languages</h1>
        <div className="flex justify-between p-[10px] mt-[5px]">
          <div className="flex flex-col items-center gap-[8px] bg-[#000000] p-[15px] rounded-2xl lg:w-[140px]">
            <img src={HTML} alt="N/A" className="h-[80px]" />
            <p>HTML</p>
          </div>
          <div className="flex flex-col items-center ml-[10px] mr-[10px] gap-[8px]  bg-[#000000] p-[15px] rounded-2xl lg:w-[140px]">
            <img src={CSS} alt="N/A" className="h-[80px]" />
            <p>CSS</p>
          </div>
          <div className="flex flex-col items-center gap-[8px]  bg-[#000000] p-[15px] rounded-2xl lg:w-[140px]">
            <img src={JS} alt="N/A" className="h-[80px]" />
            <p>JS</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col gap-[10px] reveal-section mt-[25px] lg:w-[500px]">
        <h1 className="flex items-center justify-center text-2xl">
          Libraries & Frameworks
        </h1>
        <div className="flex justify-between p-[10px] mt-[5px]">
          <div className="flex flex-col items-center gap-[8px] bg-[#000000] p-[15px] rounded-2xl lg:w-[140px]">
            <img src={ReactImg} alt="N/A" className="h-[60px]" />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center gap-[8px] ml-[10px] mr-[10px]  bg-[#000000] p-[15px] rounded-2xl lg:w-[140px]">
            <img src={Tailwind} alt="N/A" className="h-[35px] mb-[25px]" />
            <p>Tailwind</p>
          </div>
          <div className="flex flex-col items-center gap-[8px]  bg-[#000000] p-[15px] rounded-2xl lg:w-[140px]">
            <img src={BootStrap} alt="N/A" className="h-[60px]" />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col gap-[10px] reveal-section mt-[25px] lg:w-[500px]">
        <h1 className="flex items-center justify-center text-2xl">Tools</h1>
        <div className="flex justify-between p-[10px] mt-[5px]">
          <div className="flex flex-col items-center gap-[8px] bg-[#000000] p-[15px] rounded-2xl lg:w-[140px]">
            <img src={Git} alt="N/A" className="h-[60px] " />
            <p>Git</p>
          </div>
          <div className="flex flex-col items-center gap-[8px] ml-[10px] mr-[10px]  bg-[#000000] p-[15px] rounded-2xl lg:w-[140px]">
            <img src={Github} alt="N/A" className="h-[60px] invertColor" />
            <p>Github</p>
          </div>
          <div className="flex flex-col items-center gap-[8px]  bg-[#000000] p-[15px] rounded-2xl lg:w-[140px]">
            <img src={VScode} alt="N/A" className="h-[60px]" />
            <p>VS code</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col gap-[10px] reveal-section mt-[25px] lg:w-[500px]">
        <h1 className="flex items-center justify-center text-2xl">Others</h1>
        <div className="flex justify-between p-[10px] mt-[5px]">
          <div className="flex flex-col items-center gap-[8px] bg-[#000000] p-[9px] w-[90px] rounded-2xl lg:w-[140px]">
            <img src={Problem} alt="N/A" className="h-[40px] " />
            <p className="text-[13px]"> Problem Solving</p>
          </div>
          <div className="flex flex-col items-center gap-[8px] ml-[10px] mr-[10px]  bg-[#000000] p-[15px] rounded-2xl w-[90px] lg:w-[140px] ">
            <img src={Commun} alt="N/A" className="h-[40px] " />
            <p className="text-[13px]">Commun-ication</p>
          </div>
          <div className="flex flex-col items-center gap-[8px]  bg-[#000000] p-[15px] rounded-2xl w-[90px] lg:w-[140px] ">
            <img src={API} alt="N/A" className="h-[50px]" />
            <p className="text-[13px]">API</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
