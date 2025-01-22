import { LiaNode } from "react-icons/lia";
// import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3, SiExpress, SiJavascript, SiSass, SiTailwindcss, SiWeb3Dotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
// import { RiNextjsFill } from "react-icons/ri";
import { FaEthereum, FaLocationArrow } from "react-icons/fa6";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import MonkCanvas from "../components/Monk";
// import MonkCanvas from "../components/Monk";
export const Skills = () => {

    
  const skillsSet = [
    {
      name: 'node.js',
      icon: <LiaNode />
    },
    {
      name: 'tailwind CSS',
      icon: <SiTailwindcss />
    },
    {
      name: 'git',
      icon: <FaGitAlt />
    },
    {
      name: 'HTML & CSS',
      icon: <SiCss3 />  ,
      icon2: <FaHtml5 />
    },
    {
      name: 'sass',
      icon: <SiSass />
    },
    {
      name: 'tyepScript',
      icon: <BiLogoTypescript />
    },
    {
      name: 'javaScript',
      icon: <SiJavascript />
    },
    {
      name: 'next.js',
      icon: <TbBrandNextjs />
    },
    {
      name: 'web.3',
      icon: <SiWeb3Dotjs />
    },
    {
      name: 'ether.js',
      icon: <FaEthereum />
    },
    {
      name: 'react.js',
      icon: <FaReact />
    },
    {
      name: 'react native',
      icon: <TbBrandReactNative />
    },
    {
      name: 'mongodb',
      icon: <SiMongodb />
    },
    {
      name: 'express',
      icon: <SiExpress />
    },
  ]
  return (
    <div id='skills' className='min-h-screen w-full px-[1.5rem] md:px-[4rem] '>
         <div className="flex  w-full flex-col md:flex-row  justify-between items-start z-30 py-[1rem] md:pt-[4rem] ">
          <div className="flex flex-col  md:w-[30rem]">
          <div className="flex flex-col gap-3 pt-[4rem]" data-aos="fade-down">
                <p className="md:text-7xl text-3xl font-bold text-gold">Skills Sets</p>
                <FaLocationArrow className="swirl-in-fwd text-white "   />
            </div>
            <div data-aos="fade-up" className="w-full hidden md:block   h-[37rem] md:mt-2">
            <MonkCanvas />
            </div>
          </div>
       <div className=" flex flex-wrap justify-between gap-8 md:grid grid-cols-2 md:grid-cols-4  md:gap-8  mt-10" >
            {skillsSet.map((skill: {name: string, icon: JSX.Element, icon2?: JSX.Element}, index: number) => (
            <div data-aos="flip-right" key={index} className="flex flex-col cursor-pointer items-center hover:bg-transparent hover:border justify-center gap-4 py-4 px-8 rounded-md w-[9rem] h-[9rem] md:w-[10rem] md:h-[10rem] bg-primary">
             <div className="flex items-center gap-2">
             <p className={`${skill.icon2 ? 'block text-gold' : 'hidden'} text-gold text-[3rem] md:text-[4rem]`}>{skill.icon2}</p>
             <p className="text-[3rem] md:text-[4rem] text-gold">{skill.icon}</p>
             </div>
              <p className="text-[0.8rem] md:text-[1rem] capitalize text-gold">{skill.name}</p>
            </div>
            ))}
       </div>
       </div>
    </div>
  )
}
