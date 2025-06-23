import React, { useState } from "react";
import MenuIcon from "../../assets/menuIcon.png";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between p-[12px] bg-[#1a1a1a] h-[50px] sticky w-full z-20 top-0">
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
        className=" h-[300px] w-[220px] bg-[#1a1a1a] mt-[370px] flex flex-col items-center rounded-2xl p-[20px] "
      >
        <ul>
          <a href="#home">
            <li
              className="bg-[#1e1e1e] w-[170px] h-[40px] flex items-center justify-center rounded-[5px] hover:text-cyan-300 mb-3.5  cursor-pointer border border-cyan-300 "
              onClick={() => setShowMenu(false)}
            >
              Home
            </li>
          </a>

          <a href="#about">
            <li
              className="bg-[#1e1e1e] w-[170px] h-[40px] flex items-center justify-center rounded-[5px] hover:text-cyan-300 mb-3.5  cursor-pointer border border-cyan-300"
              onClick={() => setShowMenu(false)}
            >
              About
            </li>
          </a>

          <a href="#skills">
            <li
              className="bg-[#1e1e1e] w-[170px] h-[40px] flex items-center justify-center rounded-[5px] hover:text-cyan-300 mb-3.5  cursor-pointer border border-cyan-300"
              onClick={() => setShowMenu(false)}
            >
              Skills
            </li>
          </a>

          <a href="#projects">
            <li
              className="bg-[#1e1e1e] w-[170px] h-[40px] flex items-center justify-center rounded-[5px] hover:text-cyan-300 mb-3.5  cursor-pointer border border-cyan-300"
              onClick={() => setShowMenu(false)}
            >
              Projects
            </li>
          </a>
          <a href="#contact">
            <li
              className="bg-[#1e1e1e] w-[170px] h-[40px] flex items-center justify-center rounded-[5px] hover:text-cyan-300 mb-3.5  cursor-pointer border border-cyan-300"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </li>
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
