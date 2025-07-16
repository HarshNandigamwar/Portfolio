import React from "react";
import Resume from "../../assets/ShriharshNandigamwar_resume.pdf";
import ContactImg from "../../assets/contact-us.png";

import { useEffect } from "react";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending to server...");
    const formData = new FormData(event.target);

    formData.append("access_key", "c9d96e3c-2460-4b34-b239-ec91dd8a8cb0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      for (let i = 0; i < 20; i++) {
        confetti();
      }
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="p-[20px] flex flex-col items-center">
      <h1 className="text-5xl text-blue-500 font-bold flex justify-center mb-[10px] mt-[30px]">
        Contact
      </h1>

      <div className=" flex flex-col items-center justify-center mt-[30px]">
        <img src={ContactImg} alt="N/A" className="h-[200px]" />
        <a
          href={Resume}
          className="mt-[30px]"
          download="Shriharsh_Nandigamwar_resume.pdf"
        >
          <button className="resumeBtn">Download CV</button>
        </a>
      </div>

      <form
        className="contactForm m-[1.5rem] flex flex-col items-center justify-center w-[90%] lg:w-[600px]  "
        onSubmit={onSubmit}
      >
        <input
          type="text"
          className="name font-medium w-full max-w-[40rem] m-[0.5rem] p-[10px] text-white  rounded-[0.5rem] bg-black/30 border border-blue-500 hover:border-2 hover:border-cyan-300  "
          placeholder="Your name"
          name="name"
          required
        />
        <input
          type="text"
          className="email font-medium w-full max-w-[40rem] m-[0.5rem] p-[10px] text-white  rounded-[0.5rem] bg-black/30 border border-blue-500 hover:border-2 hover:border-cyan-300   "
          placeholder="Your Email"
          name="email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="msg font-medium w-full max-w-[40rem] m-[0.5rem] p-[10px] text-white  rounded-[0.5rem] bg-black/30 border border-blue-500 hover:border-2 hover:border-cyan-300   "
          required
        ></textarea>
        <span>{result}</span>
        <button
          type="submit"
          value="Send"
          className="submitBtn submitButton w-[10rem] bg-white border-[3px] border-blue-500 rounded-[10px] font-bold cursor-pointer p-[10px] text-black hover:bg-black hover:text-blue-500 mb-[20px] mt-[20px]"
        >
          Submit
        </button>
        <div className="flex gap-[10px]">
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
      </form>
    </div>
  );
};

export default Contact;
