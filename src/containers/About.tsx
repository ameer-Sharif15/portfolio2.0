import { FaLocationArrow } from "react-icons/fa6"
import {  hafeez} from "../assets"

const About = () => {
  return (
    <div id='about' className='min-h-screen flex flex-col md:flex-row items-center gap-[10rem] py-[2rem] pl-[0.4rem] pr-[0.3rem]  md:pl-[5rem] md:pr-[3rem]'>
      <div className="relative pr-4 pt-4" data-aos="flip-down">
        <div className="bg-gold rounded-sm top-0 h-[1rem] w-[20rem] absolute right-0"></div>
        <div className="bg-gold rounded-sm h-[1rem] w-[20rem] absolute  bottom-[-0.9rem] left-0"></div>
        <div className="bg-gold rounded-sm h-[23rem] top-[13.5rem] w-[1rem] absolute left-0"/>
        <div className="bg-gold rounded-sm h-[23rem] top-[0.5rem] w-[1rem] absolute right-0"/>
        <img src={hafeez} alt="" className="md:w-[28rem] w-[21rem] h-[35rem] object-fill ml-4" />
      </div>
      <div className="flex flex-col px-[1rem] md:px-0">
         <div className="flex flex-col gap-3 " data-aos="flip-left">
              <p className="text-4xl font-bold text-white">It's me👋</p>
              <FaLocationArrow className="swirl-in-fwd text-white "   />
          </div>
         <div className="" data-aos="fade-left">
          <h1 className="md:text-6xl text-3xl text-gold font-bold ">Hafeez Abubakar</h1>
         </div>
         {/* <CarouselComponent /> */}
         <div data-aos="fade-up" className="h-[25rem] md:w-[40rem] bg-primary rounded-xl mt-[2rem]  px-[2rem] overflow-y-scroll">
          <p className="text-gry flex flex-col pl-4 ">
          <span className="text-lg font-semibold text-white -ml-4">
          About Me
          </span>
          Hi there! 👋 I'm Hafeez Abubakar, a passionate and highly skilled Front-End Developer with over 3 years of experience crafting seamless and dynamic user interfaces. My journey in web development has been fueled by an insatiable curiosity for technology and a commitment to delivering impactful solutions.
          <span className="text-lg font-semibold text-white -ml-4">
          What I Do 🚀
          </span>
          I specialize in building modern, responsive, and high-performance web applications using React, JavaScript, TypeScript, and a host of cutting-edge frameworks and libraries. My experience spans a variety of projects, from intuitive dashboards and e-commerce platforms to real-time trading simulators and educational systems.
          <span className="text-lg font-semibold text-white -ml-4">
          Why Choose Me? 🤝
          </span>
          Proven Expertise: A portfolio of diverse projects showcasing proficiency in React and front-end development.
          Client-Centric Approach: I prioritize understanding and exceeding client needs.
          Lifelong Learner: Constantly evolving my skillset with emerging technologies like Web3, blockchain, and AI.
          <span className="text-lg font-semibold text-white -ml-4">
          Beyond Code 💡
          </span>
          When I’m not coding, you’ll find me exploring forex trading, learning about machine learning, or delving into the world of blockchain technology. My passion for self-improvement fuels my growth as a multidisciplinary expert and a creative thinker.
          Let’s connect and create something amazing together! 🌍✨
          </p>
         </div>
      </div>
    </div>
  )
}

export default About