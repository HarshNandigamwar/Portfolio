import React from "react";
import Img from "../../assets/myImg.jpg";
import Resume from "../../assets/ShriharshNandigamwar_resume.pdf";
const Home = () => {
  return (
    <>
      <div id="home">
        <div className="mt-[30px] flex flex-col items-center mb-[30px]  ">
          <img src={Img} alt="N/A" className="h-[200px] rounded-2xl " />
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="">Hello, I'm</p>

          <h1 className="text-3xl font-bold text-cyan-300">
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

        <div className="links flex items-center justify-center gap-3  mt-[25px]">
          <a
            href="https://www.linkedin.com/in/shriharsh-nandigamwar-b106702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="bg-[#267feb] flex items-center justify-center h-[50px] w-[50px] rounded-[50%] text-[30px]  border border-cyan-300 hover:bg-[#1a1a1a] hover:text-[#267feb] "
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in linkedin"></i>
          </a>
          <a
            href="https://github.com/HarshNandigamwar"
            className="bg-[#1a1a1a] flex items-center justify-center h-[50px] w-[50px] rounded-[50%] text-[30px] border border-cyan-300 hover:bg-[#ffffff] hover:text-[#1a1a1a]"
            target="_blank"
          >
            <i className="fa-brands fa-github github"></i>
          </a>
          <a
            href="https://www.instagram.com/harsh_nandigamwar?igsh=MW8yY3VzYTY0d245YQ=="
            className="bg-[#ff24de] flex items-center justify-center h-[50px] w-[50px] rounded-[50%] text-[30px]  border border-cyan-300 hover:bg-[#1a1a1a] hover:text-[#ff24de]"
            target="_blank"
          >
            <i className="fa-brands fa-instagram instagram"></i>
          </a>
        </div>

        <div className="flex justify-center mt-[25px]">
          <a href={Resume} download="Shriharsh_Nandigamwar_resume.pdf">
            <button className="w-[10rem] bg-white border-[3px] border-cyan-300 rounded-[2rem] font-bold cursor-pointer p-[10px] text-black hover:bg-black hover:text-cyan-300">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
