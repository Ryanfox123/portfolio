import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kanit",
});

export default function Home() {
  return (
    <div className={kanit.className}>
      <Nav />
      <AboutMe />
    </div>
  );
}
