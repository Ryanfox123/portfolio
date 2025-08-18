import React from "react";
import Carousel from "./Carousel";

function AboutMe() {
  return (
    <div className="h-full mt-16 mx-auto w-4/5 bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="bg-persianGreen flex-1 p-6 rounded-2xl shadow-2xl text-white">
          <h3 className="text-2xl font-extrabold mb-6 text-center underline">
            About Me
          </h3>

          <div className="space-y-6 leading-relaxed text-lg">
            <p>
              Hey, I’m a{" "}
              <span className="font-semibold">Software Developer</span> who
              loves learning new things and building cool projects. Here’s a bit
              about how I got here.
            </p>

            <p>
              I first got into coding as a hobby while I was working as an
              <span className="font-semibold"> air-conditioning engineer</span>.
              In the evenings I’d mess around with free online courses and
              YouTube tutorials, slowly getting the hang of{" "}
              <span className="italic">JavaScript, HTML, CSS</span>, and
              eventually
              <span className="italic"> Express</span> and{" "}
              <span className="italic">React</span>. My first little apps were a
              URL shortener and a note maker — nothing fancy, but they lit the
              spark for me.
            </p>

            <p>
              After a while, I knew I wanted to take it further, so I left my
              old job and joined the{" "}
              <span className="font-semibold">
                Northcoders Fullstack Bootcamp
              </span>
              . That’s where I really started to level up — learning things like
              pair programming, AGILE, and test-driven development. I also met a
              bunch of brilliant people who made the whole experience even
              better.
            </p>

            <p>
              Now I’m focused on landing my first developer role. While I apply
              for jobs, I’m keeping my skills sharp by building personal
              projects (you can find some here or on my GitHub). I’m excited to
              keep improving and see where this path takes me.
            </p>

            <p className="italic text-center">
              Thanks for taking the time to read this — really appreciate it! 🙏
            </p>
          </div>
        </div>

        <div className="flex-1">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
