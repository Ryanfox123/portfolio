import React from "react";

function AboutMe() {
  return (
    <div className="h-full mt-20">
      <h3 className="text-teal m-auto w-max font-bold text-3xl mt-8 underline">
        About Me
      </h3>
      <div className="flex flex-row">
        <div className="bg-persianGreen w-2/5 mx-auto mt-14 p-4">
          <p className="text-black">
            Greetings! Im a Software Developer with a big passion for learning
            and progressing my skills. Initially I began my journey as a
            self-learning hobbyist, dipping my toes into free online courses and
            simple youtube guides. Most my time during the first 6 months were
            spent building a strong foundation on JS, HTML, CSS and other
            technologies such as Express and React. Creating small scale apps
            such as a url shortener and note making apps helped me solidify the
            foundational structure of what it means to be a developer
          </p>
        </div>
        <div> Image here</div>
      </div>
    </div>
  );
}

export default AboutMe;
