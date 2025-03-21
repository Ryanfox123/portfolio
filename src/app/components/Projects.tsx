import React from "react";
import Slider from "./Slider";

function Projects() {
  return (
    <div id="my-projects" className="bg-teal mt-32 h-full overflow-auto">
      <h3 className="text-white m-auto w-max font-bold text-3xl mt-8 underline">
        My Projects
      </h3>

      <p className="w-2/4 m-auto text-center text-white mt-4 text-lg">
        Here you can find all of my personal projects. Each one was made with
        passion and with the intent to teach myself useful new skills that will
        be applicable to the real world.
      </p>
      <br></br>
      <Slider />
    </div>
  );
}

export default Projects;
