import React, { useEffect } from "react";
import SkillCard from "../../components/SkillCard/SkillCard";
import "./Skills.css";
import Problem from "../../assets/problem2.jpg";
import Commun from "../../assets/comunication.jpg";
import API from "../../assets/api.jpg";
import Team from "../../assets/teamwork.png";

const Skills = () => {
  return (
    <div className="p-[20px] mt-[35px] flex flex-col items-center pt-13">
      <div className="flex items-center justify-center text-5xl text-blue-500 font-bold mb-[20px]">
        Skills
      </div>

      {/* Frontend   */}
      <div className="bg-black/30 border border-blue-500 p-[20px] rounded-2xl flex flex-col items-center lg:max-w-[500px]">
        <h1 className="font-bold text-[40px] ">Frontend</h1>
        <div className=" flex flex-col gap-[10px] reveal-section lg:w-[500px] lg:max-w-[500px]">
          <h1 className="flex items-center justify-center text-2xl">
            Languages
          </h1>
          <div className="flex justify-between p-[10px] mt-[5px] gap-[8px]">
            <SkillCard
              image="https://skillicons.dev/icons?i=html"
              name="HTML"
            />

            <SkillCard image="https://skillicons.dev/icons?i=css" name="CSS" />

            <SkillCard image="https://skillicons.dev/icons?i=js" name="JS" />
          </div>
        </div>

        <div className=" flex flex-col gap-[10px] reveal-section  lg:w-[500px] lg:max-w-[500px]">
          <h1 className="flex items-center justify-center text-2xl mt-[15px]">
            Libraries & Frameworks
          </h1>
          <div className="flex justify-between p-[10px] mt-[5px] gap-[8px]">
            <SkillCard
              image="https://skillicons.dev/icons?i=react"
              name="React.js"
            />

            <SkillCard
              image="https://skillicons.dev/icons?i=tailwind"
              name="Tailwind"
            />

            <SkillCard
              image="https://skillicons.dev/icons?i=redux"
              name="Redux"
            />
          </div>
        </div>
      </div>

      {/* Backend   */}
      <div className="bg-black/30 border border-blue-500 p-[20px] rounded-2xl flex flex-col items-center mt-[25px] lg:max-w-[500px]">
        <h1 className="font-bold text-[40px] ">Backend</h1>

        <div className="  flex flex-col gap-[10px] reveal-section lg:w-[500px] lg:max-w-[500px]">
          <div className="flex justify-between p-[10px] mt-[5px] gap-[8px]">
            <SkillCard
              image="https://skillicons.dev/icons?i=nodejs"
              name="Node.js"
            />

            <SkillCard
              image="https://skillicons.dev/icons?i=express"
              name="Express.js"
            />

            <SkillCard
              image="https://skillicons.dev/icons?i=mongodb"
              name="MongoDB"
            />
          </div>
        </div>

        <div className="  flex flex-col gap-[10px] reveal-section  lg:w-[500px] lg:max-w-[500px]">
          <div className="flex justify-between p-[10px] mt-[5px] gap-[8px]">
            <SkillCard
              image="https://skillicons.dev/icons?i=firebase"
              name="Firebase"
            />

            <SkillCard image={API} name="REST API" />

            <SkillCard
              image="https://skillicons.dev/icons?i=mysql"
              name="SQL"
            />
          </div>
        </div>
      </div>

      {/* Tools   */}
      <div className="bg-black/30 border border-blue-500 p-[20px] rounded-2xl flex flex-col items-center mt-[25px] lg:max-w-[500px]">
        <h1 className="font-bold text-[40px] ">Tools</h1>

        <div className="  flex flex-col gap-[10px] reveal-section lg:w-[500px] lg:max-w-[500px]">
          <div className="flex justify-between p-[10px] mt-[5px] gap-[8px]">
            <SkillCard image="https://skillicons.dev/icons?i=git" name="Git" />

            <SkillCard
              image="https://skillicons.dev/icons?i=github"
              name="GitHub"
            />

            <SkillCard
              image="https://skillicons.dev/icons?i=vscode"
              name="VS Code"
            />
          </div>
        </div>

        <div className=" flex flex-col gap-[10px] reveal-section  lg:w-[500px] lg:max-w-[500px]">
          <div className="flex justify-between p-[10px] mt-[5px] gap-[8px]">
            <SkillCard
              image="https://skillicons.dev/icons?i=vercel"
              name="Vercel"
            />

            <SkillCard
              image="https://skillicons.dev/icons?i=netlify"
              name="Netlify"
            />

            <SkillCard
              image="https://skillicons.dev/icons?i=replit"
              name="Replit"
            />
          </div>
        </div>
      </div>

      {/* Soft Skills   */}
      <div className="bg-black/30 border border-blue-500 p-[20px] rounded-2xl flex flex-col items-center mt-[25px] lg:max-w-[500px]">
        <h1 className="font-bold text-[40px] ">Soft Skill</h1>

        <div className=" flex flex-col gap-[10px] reveal-section lg:w-[500px] lg:max-w-[500px]">
          <div className="flex justify-between p-[10px] mt-[5px] gap-[8px]">
            <SkillCard image={Problem} name="Problem Solving" />

            <SkillCard image={Commun} name="Communi-cation" />

            <SkillCard image={Team} name="Teamwork" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
