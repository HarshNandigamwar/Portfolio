import React from "react";
import "./Home.css";
import Img from "../../assets/myImg.jpg";
import Resume from "../../assets/ShriharshNandigamwar_resume.pdf";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Home = () => {
  const hello = useRef();
  useGSAP(() => {
    gsap.from(hello.current, {
      opacity: 0,
      duration: 0.6,
      x: -500,
    });
  });
  const name = useRef();
  useGSAP(() => {
    gsap.from(name.current, {
      opacity: 0,
      duration: 0.6,
      x: -500,
    });
  });

  const position = useRef();
  useGSAP(() => {
    gsap.from(position.current, {
      opacity: 0,
      duration: 0.6,
      y: 300,
    });
  });

  const icons = useRef();
  useGSAP(() => {
    gsap.from(icons.current, {
      opacity: 0,
      duration: 0.6,
      y: 200,
    });
  });
  const myImg = useRef();
  useGSAP(() => {
    gsap.from(myImg.current, {
      opacity: 0,
      duration: 0.6,
      y: 200,
    });
  });

  return (
    <>
      <div className="pt-13">
        <div
          className="mt-[30px] flex flex-col items-center mb-[30px]  "
          ref={myImg}
        >
          <img src={Img} alt="N/A" className="h-[200px] rounded-2xl " />
        </div>

        <div
          className="flex flex-col items-center justify-center"
          ref={position}
        >
          <p ref={hello}>Hello, I'm</p>

          <h1 className="text-3xl font-bold text-blue-500" ref={name}>
            {" "}
            Shriharsh Nandigamwar
          </h1>

          <h2 className="text-2xl ">Frontend Developer</h2>

          <h3 className="text-[18px] text-gray-200 ">
            Frontend Developer | B.Sc IT Student
          </h3>

          <p className="text-[15px] items-center text-gray-200">
            {" "}
            i build clean, responsive websites using <br />{" "}
          </p>
          <p className="text-[15px] items-center text-gray-200">
            {" "}
            JavaScript, React.js & Tailwind CSS.
          </p>

          <h6 className="text-[20px] text-gray-200">
            I'm always learning, always creating.
          </h6>
        </div>

        <div
          className="links flex items-center justify-center gap-3  mt-[25px]"
          ref={icons}
        >
          <a
            href="https://www.linkedin.com/in/shriharsh-nandigamwar-b106702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <img
              src="https://skillicons.dev/icons?i=linkedin"
              alt="linkedin"
              srcset=""
            />
          </a>
          <a href="https://github.com/HarshNandigamwar" target="_blank">
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="Github"
              srcset=""
            />
          </a>
          <a
            href="https://www.instagram.com/harsh_nandigamwar?igsh=MW8yY3VzYTY0d245YQ=="
            target="_blank"
          >
            <img
              src="https://skillicons.dev/icons?i=instagram"
              alt="instagram"
              srcset=""
            />
          </a>
        </div>

        <div className="flex justify-center mt-[25px]">
          <a href={Resume} download="Shriharsh_Nandigamwar_resume.pdf">
            <button className="resumeBtn">Download CV</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
