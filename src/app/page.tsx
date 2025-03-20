import Header from "./components/Header";
import Nav from "./components/Nav";
import { Kanit } from "next/font/google";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kanit",
});

export default function Home() {
  return (
    <div className={`${kanit.className} `}>
      <Nav />
      <Header />
      <Projects />
      <AboutMe />
    </div>
  );
}
