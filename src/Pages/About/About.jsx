import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
    <div
      id="about"
      className="p-[20px] mt-[20px] gap-[10px] flex flex-col items-center"
    >
      <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col gap-[10px] reveal-section max-w-[500px]">
        <h1 className="text-4xl text-cyan-300 mb-[10px] ">About Me</h1>
        <p className="text-[16px] md:text-[18px]">
          {" "}
          I'm Shriharsh Nandigamwar, a passionate Full Stack Developer dedicated
          to transforming ideas into high-performance, user-friendly web
          applications.
          <br />
          <br />
          With expertise across the full web development stack, I specialize in
          building clean and intuitive front-end interfaces using React.js,
          while also developing scalable and secure back-end solutions with
          Node.js, Express, and MongoDB.
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

      <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col  reveal-section mt-[20px] max-w-[500px]">
        <h1 className="text-4xl text-cyan-300 mb-[10px]">Education</h1>
        <p className="text-[15px] md:text-[18px] ">
          Bachelor of Science in Information Technology
        </p>
        <p className="text-[16px] md:text-[18px]">
          Gondwana University, Gadchiroli
        </p>
      </div>
    </div>
  );
};

export default About;
