import React, { useState } from "react";
import MenuIcon from "../../assets/menuIcon.png";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between p-[12px] bg-[#1a1a1a] h-[50px] sticky w-full top-0">
      <div className="text-cyan-300 font-bold text-xl">{"< Shriharsh />"}</div>
      <div onClick={() => setShowMenu(!showMenu)}>
        <img
          style={{ display: showMenu ? "none" : "flex" }}
          src={MenuIcon}
          alt="N/A"
          className="h-[20px] mr-[20px]"
        />
      </div>
      <div
        style={{ display: showMenu ? "flex" : "none" }}
        className=" h-[200px] w-[150px] bg-[#1a1a1a] mt-[265px] flex flex-col items-center rounded-2xl p-[20px]  "
      >
        <ul>
          <li
            className="bg-[#1e1e1e] w-[100px] flex items-center justify-center rounded-[5px] hover:text-cyan-300 mb-2.5 cursor-pointer border border-cyan-300 "
            onClick={() => setShowMenu(false)}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className="bg-[#1e1e1e] w-[100px] flex items-center justify-center rounded-[5px] hover:text-cyan-300 mb-2.5 cursor-pointer border border-cyan-300"
            onClick={() => setShowMenu(false)}
          >
            <a href="#about">About</a>
          </li>
          <li
            className="bg-[#1e1e1e] w-[100px] flex items-center justify-center rounded-[5px] hover:text-cyan-300 mb-2.5 cursor-pointer border border-cyan-300"
            onClick={() => setShowMenu(false)}
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            className="bg-[#1e1e1e] w-[100px] flex items-center justify-center rounded-[5px] hover:text-cyan-300 mb-2.5 cursor-pointer border border-cyan-300"
            onClick={() => setShowMenu(false)}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            className="bg-[#1e1e1e] w-[100px] flex items-center justify-center rounded-[5px] hover:text-cyan-300 mb-2.5 cursor-pointer border border-cyan-300"
            onClick={() => setShowMenu(false)}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
