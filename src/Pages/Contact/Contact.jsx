import React from "react";
import Resume from "../../assets/ShriharshNandigamwar_resume.pdf";
import ContactImg from "../../assets/contact-us.png";
const Contact = () => {






  
  return (
    <div id="contact" className="p-[20px] flex flex-col items-center">
      <h1 className="text-5xl text-cyan-300 flex justify-center mb-[10px] mt-[30px]">
        Contact
      </h1>

      <div className=" flex flex-col items-center justify-center mt-[30px]">
        <img src={ContactImg} alt="N/A" className="h-[200px]" />
        <a
          href={Resume}
          className="mt-[30px]"
          download="Shriharsh_Nandigamwar_resume.pdf"
        >
          <button className="w-[10rem] bg-white border-[3px] border-cyan-300 rounded-[2rem] font-bold cursor-pointer p-[10px] text-black hover:bg-black hover:text-cyan-300">
            Download CV
          </button>
        </a>
      </div>
      {/* onSubmit={onSubmit} */}
      <form className="contactForm m-[1.5rem] flex flex-col items-center justify-center w-[90%] lg:w-[600px]  ">
        <input
          type="text"
          className="name font-medium w-full max-w-[40rem] m-[0.5rem] p-[10px] text-white border border-[#282828] rounded-[0.5rem] bg-[#282828] hover:border hover:border-cyan-300  "
          placeholder="Your name"
          name="name"
          required
        />
        <input
          type="text"
          className="email font-medium w-full max-w-[40rem] m-[0.5rem] p-[10px] text-white border border-[#282828] rounded-[0.5rem] bg-[#282828] hover:border hover:border-cyan-300   "
          placeholder="Your Email"
          name="email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="msg font-medium w-full max-w-[40rem] m-[0.5rem] p-[10px] text-white border border-[#282828] rounded-[0.5rem] bg-[#282828] hover:border hover:border-cyan-300   "
          required
        ></textarea>
        {/* <span>{result}</span> */}
        <button
          type="submit"
          value="Send"
          className="submitBtn submitButton w-[10rem] bg-white border-[3px] border-cyan-300 rounded-[10px] font-bold cursor-pointer p-[10px] text-black hover:bg-black hover:text-cyan-300 mb-[20px] mt-[20px]"
        >
          Submit
        </button>
        <div className="flex gap-[10px]">
          <a
            href="https://www.linkedin.com/in/shriharsh-nandigamwar-b106702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="bg-[#267feb] flex items-center justify-center h-[50px] w-[50px] rounded-[50%] text-[30px]  border border-cyan-300"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in linkedin"></i>
          </a>
          <a
            href="https://github.com/HarshNandigamwar"
            className="bg-[#1a1a1a] flex items-center justify-center h-[50px] w-[50px] rounded-[50%] text-[30px]  border border-cyan-300"
            target="_blank"
          >
            <i className="fa-brands fa-github github"></i>
          </a>
          <a
            href="https://www.instagram.com/harsh_nandigamwar?igsh=MW8yY3VzYTY0d245YQ=="
            className="bg-[#ff24de] flex items-center justify-center h-[50px] w-[50px] rounded-[50%] text-[30px]  border border-cyan-300"
            target="_blank"
          >
            <i className="fa-brands fa-instagram instagram"></i>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
