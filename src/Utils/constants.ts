export const projects = [
  {
    id: 1,
    src: "/gather.PNG",
    title: "Gather",
    alt: "Gather screenshot",
    desc: "A full-stack web application built with Next.js, MongoDB, and Google OAuth. This project allows users to browse and sign up for future events then add them to their Google calendar.",
    urls: {
      githubsrc: "https://github.com/Ryanfox123/gather",
      livesrc: "https://gather-lime.vercel.app/login",
    },
  },
  {
    id: 2,
    src: "/pix-pursuit.PNG",
    title: "Pix Pursuit",
    alt: "pix-pursuit project screenshot",
    desc: "My first ever dedicated mobile app. This project encourages users to step outside and explore their areas by signing up to pix hunts and chasing picture locations from others to earn points. This project uses React Native as its framework, a backend powered with Express/PSQL and hosted on Render. I also utilised AWS S3 buckets to store user uploaded images with the help of the AWS CLI.",
    urls: {
      githubsrc: "https://github.com/Ryanfox123/Pix-Pursuit",
      youtubesrc:
        "https://www.youtube.com/watch?v=uooW3U5M-v4&ab_channel=Northcoders",
    },
  },
  {
    id: 3,
    src: "/news.PNG",
    title: "NC News",
    alt: "NC News project screenshot",
    desc: "My first full stack application. Designed to mimic a reddit style news application that allows users to log in, post, comment and upvote articles. Powered with an Express and PSQL backend. This project was very helpful for me in particular for learning about the importance of accessibility, SEO and WCAG 2.2 AA standards. Lighthouse was used prominently to meet these criteria.",
    urls: {
      githubsrc: "https://github.com/Ryanfox123/Pix-Pursuit-BE",
      livesrc: "https://ryans-nc-news.netlify.app/",
    },
  },
];
