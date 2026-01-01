

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Assignments from "./components/Assignments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <div className="app-container">
      <div className="grain" />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Assignments />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;