import React, { useEffect } from "react";

const ProjectCard = (props) => {
  return (
    <div className="mt-[15px] w-[300px] bg-black/30 rounded-2xl shadow-md overflow-hidden transform border border-blue-500 transition-transform duration-300 hover:scale-102 hover:shadow-xl  animate-fade-in p-[10px]">
      <img
        src={props.img}
        alt={props.alt}
        className="w-full h-44 object-cover rounded-[10px]"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-600">
          {" "}
          {props.projectName}{" "}
        </h3>
        <p className="text-blue-300 text-sm mt-2">{props.info}</p>

        <div className="mt-4 flex gap-3">
          <a
            href={props.liveLink}
            target="_blank"
            className="px-4 py-1.5 text-[13px]  bg-blue-500 text-white rounded-[5px] hover:bg-blue-700 border border-blue-500 hover:scale-102  hover:border hover:border-[#fff] transition"
          >
            Live Preview
          </a>
          <a
            href={props.gitLink}
            target="_blank"
            className="px-4 py-1.5 text-[13px]   bg-[#1a1a1a] text-white rounded-[5px] border border-[#1a1a1a] hover:scale-102 hover:border hover:border-blue-500 transition"
          >
            Source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
