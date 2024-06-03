
import Hero from "./components/hero";
import Contact from "./components/contact";
import Project from "./components/project";
import About from "./components/about";
import Skill from "./components/skill";


export default function Home() {
  return (

    <h1>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </h1>

  );
}
