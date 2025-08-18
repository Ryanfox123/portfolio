import Header from "./components/Header";
import { Kanit } from "next/font/google";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import Links from "./components/Links";
import SkillsSection from "./components/SkillsSection";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kanit",
});

export default function Home() {
  return (
    <div className={`${kanit.className} overflow-visible`}>
      <Header />
      <Nav />
      <Projects />
      <AboutMe />
      <SkillsSection />
      <Links />
    </div>
  );
}
