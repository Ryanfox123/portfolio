"use client";
import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";

const links = [
  {
    name: "GitHub",
    url: "https://github.com/Ryanfox123",
    icon: <FiGithub />,
    bgColor: "bg-persianGreen",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ryan-fox-7708102b1/",
    icon: <FiLinkedin />,
    bgColor: "bg-persianGreen",
  },
  {
    name: "Email",
    url: "mailto:ryanfox1@hotmail.co.uk",
    icon: <FiMail />,
    bgColor: "bg-persianGreen",
  },
  {
    name: "CV / Resume",
    url: "/RyanFox_Developer.pdf",
    icon: <FiFileText />,
    bgColor: "bg-persianGreen",
  },
];

function Links() {
  return (
    <div className="w-full my-16 flex flex-col items-center gap-6">
      <h2 className="text-2xl font-extrabold text-center mb-6 text-persianGreen ">
        Connect with Me
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-5 py-3 rounded-xl text-white font-semibold transition-transform transform hover:scale-105 hover:shadow-lg ${link.bgColor}`}
          >
            <span className="text-xl">{link.icon}</span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Links;
