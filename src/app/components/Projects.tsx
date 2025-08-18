import React from "react";
import Slider from "./Slider";

function Projects() {
  return (
    <div
      id="my-projects"
      className="bg-teal py-12 h-full overflow-auto shadow-2xl"
    >
      <h3 className="text-white text-center font-bold text-3xl mb-8">
        Projects
      </h3>
      <Slider />
    </div>
  );
}

export default Projects;
