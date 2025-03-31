import React from "react";
import Slider from "./Slider";

function Projects() {
  return (
    <div
      id="my-projects"
      className="bg-teal py-8 h-full overflow-auto shadow-2xl"
    >
      <h3 className="text-white m-auto w-max font-bold text-3xl">Projects</h3>
      <br></br>
      <Slider />
    </div>
  );
}

export default Projects;
