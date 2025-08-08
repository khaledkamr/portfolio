import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Connect from "./Components/Connect";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Connect />
    </div>
  );
}