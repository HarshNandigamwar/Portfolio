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

        {/* <div className="mt-3">
        <p className="text-xs font-medium text-gray-500 uppercase">Tech Stack:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">React</span>
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Tailwind</span>
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">JavaScript</span>
        </div>
      </div> */}

        <div className="mt-4 flex gap-3">
          <a
            href={props.liveLink}
            target="_blank"
            className="px-4 py-1.5 text-sm border bg-blue-500 text-white rounded-full hover:bg-blue-700 hover:border-blue-500 transition"
          >
            Live Preview
          </a>
          <a
            href={props.gitLink}
            target="_blank"
            className="px-4 py-1.5 text-sm border  bg-[#1a1a1a] text-white rounded-full hover:border-blue-500 transition"
          >
            Source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
