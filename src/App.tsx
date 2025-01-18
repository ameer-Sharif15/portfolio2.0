'./App.css';
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import  About  from "./containers/About";
import Hero from "./containers/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./containers/Projects";
import { Skills } from "./containers/Skills";
import Awards from "./containers/Awards";

const App = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      mirror: true,
      duration: 700,
      easing: "ease-out-cubic",
      delay: 300
    });
  }, []);
  return (
    <div className="text-primary relative max-w-[1500px] mx-auto  bg-primary w-full h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Awards />
    </div>
  )
}

export default App