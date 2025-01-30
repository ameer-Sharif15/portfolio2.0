import { TypeAnimation } from "react-type-animation"
import {  pic2 } from "../assets"
import { FaGithub, FaXTwitter, FaLocationArrow } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const social  = [
    {
        icon: <FaGithub /> ,
        to: 'https://github.com/ameer-Sharif15'
    },
    {
        icon: <FaLinkedinIn /> ,
        to: 'https://www.linkedin.com/in/hafeez-abubakar-883b4a24b/'
    },
    {
        icon: <FaXTwitter /> ,
        to: 'https://x.com/Hafeez46534515'
    },
    {
        icon: <FaFacebookF /> ,
        to: 'https://www.facebook.com/profile.php?id=100089837946024'
    },
]
const Hero = () => {
  return (
    <div id="home" className="h-screen relative w-full text-white pt-[10rem]  px-4 md:px-[10rem]">
        <div className="flex flex-col md:flex-row  justify-between">
            <div className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-2">
            <TypeAnimation
              sequence={[
                2500,
                " Front End Developer",
                6000,
                'Building digital experiences',
                6000,
                'Creating innovative solutions',
                6000,
                'Transforming ideas into code',
                3000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
              className="text-white text-base md:text-[23px] font-bold "
               />
                <FaLocationArrow className="swirl-in-fwd" />
                </div>
             <div className="md:min-h-[13rem]">
             <TypeAnimation
              sequence={[
                4000,
                " Hafeez Abubakar",
              ]}
              cursor={false}
              wrapper="h1"
              speed={5}
              className="md:text-8xl text-4xl text-gold font-bold md:w-[15rem] "
               />
             </div>
                <div className="text-base mr-4 md:mr-0 text-white font-normal md:w-[30rem] fade-in">more than just a developer, I'm a creator and problem-solver dedicated to transforming ideas into functional and visually compelling products. I aim to continuously grow, adapt, and bring innovative solutions to the table, creating value for users and businesses alike.</div>
                <ul className="flex items-center gap-4 mb-8 bounce-in-left ">
                    {social.map((item: {icon: JSX.Element, to: string} , index: number) => (
                        <a href={item.to} key={index} className="md:w-[50px] w-[35px] h-[35px] md:h-[50px] text-[22px]  bg-gold  flex text-[#000] justify-center items-center hover:bg-primary hover:border hover:text-gold  rounded-full">{item.icon}</a>
                    ))}
                </ul>
                <button
                onClick={() => window.open('/Hafeez_Resume.pdf', '_blank')}
                className="w-[10rem] slide-top bg-gry py-2 rounded-xl hover:text-primary text-[#000] hover:bg-white">Download Resume</button>
            </div>
            <div className="flex  ">
                <div className="absolute fade-in_two  bottom-0 right-1">
                <img src={pic2} alt="picture"  className="w-[15rem] sm:w-[15rem] md:w-[30rem]"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero