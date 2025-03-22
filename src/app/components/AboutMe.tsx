import React from "react";

function AboutMe() {
  return (
    <div className="h-full mt-20">
      <h3 className="text-teal m-auto w-max font-bold text-3xl mt-8 underline">
        About Me
      </h3>
      <div className="flex flex-row">
        <div className="bg-persianGreen w-2/5 mx-auto mt-14 p-4">
          <p className="text-black whitespace-pre-wrap text-center">
            Greetings! Im a Software Developer with a big passion for learning
            and progressing my skills. Here is a little bit about me and my
            current journey.
          </p>
          <br />
          <p className="text-black whitespace-pre-wrap text-center">
            Initially I began my journey as a self-learning hobbyist, dipping my
            toes into free online courses and simple youtube guides. At the time
            I was a Air-conditioning engineer working on building sites full
            time who picked this up out of curiosity. Most of my time during the
            first 6 months were spent building a strong foundation on JS, HTML,
            CSS and other technologies such as Express and React. This helped me
            create some of my first small scale apps including a URL shortener
            and a note creater. It was during this period I realised I wanted to
            take programming further than a hobby.
          </p>
          <br />
          <p className="text-black whitespace-pre-wrap text-center">
            The next stage of my journey would include me leaving my old career
            to enroll in a fullstack JavaScript bootcamp at Northcoders. I put
            down the tools and bought a new laptop to look the part! This was an
            amazing step in my pathway to become a professional developer as I
            would be introduced to some crucial concepts, such as pair
            programming and AGILE methodologies. Of course I also refined my
            JavaScript skills greatly and learned how to incorporate things like
            TDD into my workflow. After meeting some amazing fellow students and
            mentors, I realised this career was the perfect path for me.
          </p>
          <br />
          <p className="text-black whitespace-pre-wrap text-center">
            This brings me here, now! Equipped with the professional help of my
            former mentors and a hunger to improve, my goal is to land my first
            developer role. Aside from looking for suitable roles for me, my
            immediate plans are to continue exercising and expanding my skillset
            to become the best version of myself. I will continue creating
            interesting personal projects that you can find here or on my
            github.
          </p>
          <br />
          <p className="text-black whitespace-pre-wrap text-center">
            I appreciate anyone who happens to still be reading this, thank you
            and have a great day :){" "}
          </p>
        </div>
        <div> Image here</div>
      </div>
    </div>
  );
}

export default AboutMe;
