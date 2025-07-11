import React from "react";
import { useEffect } from "react";
import Certificat from "../../../public/SkillCraft Tecnology Certificate & Letter of Recommendation.pdf";
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
      {/* About card  */}

      <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col gap-[10px] reveal-section max-w-[700px]">
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

      {/* Experience */}
      <div
        className="bg-[#1a1a1a] py-10 px-6 md:px-20 mt-[20px] rounded-2xl max-w-[700px]"
        id="experience"
      >
        <h2 className="text-3xl font-bold text-cyan-300 mb-6">Experience</h2>

        <div className="bg-[#1e1e1e] p-6 rounded-2xl shadow-md transition hover:shadow-xl">
          <h3 className="text-xl font-semibold text-cyan-300">
            Frontend Developer Intern
          </h3>

          <p className="text-sm text-gray-500 mb-2">
            Skillcraft Technology | Feb 2025 – Mar 2025
          </p>
          <ul className="list-disc list-inside space-y-1 text-white">
            <li>
              Built responsive and interactive web interfaces using HTML, CSS,
              JavaScript, and React.js.
            </li>
            <li>
              Worked on real-world projects and improved UI/UX components.
            </li>
            <li>
              Awarded a
              <a
                href={Certificat}
                download="Shriharsh_Nandigamwar_Certificate & Letter of Recommendation.pdf"
                className="font-medium text-blue-500"
              >
                {" "}
                Certificate of Completion{" "}
              </a>
              and a{" "}
              <a
                href={Certificat}
                download="Shriharsh_Nandigamwar_Certificate & Letter of Recommendation.pdf"
                className="font-medium text-blue-500"
              >
                Letter of Recommendation{" "}
              </a>
              for exceptional performance.
            </li>
          </ul>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col gap-[10px] reveal-section mt-[20px] max-w-[700px]">
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

      {/* Education */}
      <div className="bg-[#1a1a1a] p-[20px] rounded-2xl flex flex-col  reveal-section mt-[20px] max-w-[700px]">
        <h1 className="text-4xl text-cyan-300 mb-[10px]">Education</h1>
        <p className="text-[15px] md:text-[18px] ">
          Bachelor of Science in Information Technology
        </p>
        <p className="text-[16px] md:text-[18px] ">
          Gondwana University, Gadchiroli
        </p>
      </div>
    </div>
  );
};

export default About;
