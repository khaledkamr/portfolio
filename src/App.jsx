import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./pages/Projects";
import Connect from "./Components/Connect";
import Home from "./pages/Home";
import BackToTopButton from "./Components/BackToTopButton";


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <BackToTopButton />
    </div>
  );
}