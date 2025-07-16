import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
const SkillCard = (props) => {
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

  const [Online, setOnline] = useState(navigator.onLine);

  return (
    <div>
      <div className="bg-[#000000] rounded-[8px] p-[5px] flex flex-col items-center h-[150px] w-[90px] justify-center lg:w-[150px] hover:border hover:border-blue-500 hover:shadow-[0_0_5px_aqua] transition-transform duration-300 hover:scale-103">
        <div className="flex flex-col items-center justify-center p-[5px]">
          <img
            src={props.image}
            alt={Online ? "Loading..." : "Offline"}
            srcset=""
            className="h-[60px]"
            loading="lazy"
          />
        </div>
        <p className="mt-[8px] text-[14px]"> {props.name} </p>
      </div>
    </div>
  );
};

export default SkillCard;
