import React from "react";

const About = () => {
  return (
    <div id="about" className="p-[20px] mt-[20px] gap-[10px] flex flex-col items-center">
      <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col gap-[10px] reveal-section max-w-[500px]">
        <h1 className="text-4xl text-cyan-300 mb-[10px] ">About Me</h1>
        <p className="text-[16px] md:text-[18px]">
          {" "}
          Hi, I'm Shriharsh Nandigamwar a passionate and dedicated Frontend
          Developer based in Rajura, Maharashtra. <br />I am 20 years old, I
          bring a strong enthusiasm for building intuitive, high-performance,
          and visually engaging web applications. With expertise in modern
          frontend technologies, I focus on delivering user-centric solutions
          that not only look great but also enhance functionality and overall
          user experience. I thrive on solving complex problems and constantly
          stay updated with the latest trends and best practices in frontend
          development to ensure the quality and relevance of my work.
        </p>
      </div>

      <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col  reveal-section mt-[20px] max-w-[500px]">
        <h1 className="text-4xl text-cyan-300 mb-[10px]">Education</h1>
        <p className="text-[15px] md:text-[18px] ">
          Bachelor of Science in Information Technology
        </p>
        <p className="text-[16px] md:text-[18px]">
          Gondwana University, Gadchiroli
        </p>
      </div>

      <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col gap-[10px] reveal-section mt-[20px] max-w-[500px]">
        <h1 className="text-4xl text-cyan-300 mb-[10px]">Certifications</h1>
        <div className="text-[18px]">
          <h3 className="text-[17px]">
            <b className="text-cyan-300">IBM</b>: Web Developmenet Fundamentals
          </h3>
          <h3 className="text-[14px]">
            <b className="text-cyan-300">AWS APAC</b>: Solutions Architecture
            job Simulation
          </h3>
          <h3 className="text-[17px]">
            <b className="text-cyan-300">Accenture & Forage</b>: Developer &
            Technology job Simulation
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
