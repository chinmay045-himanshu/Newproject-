import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}