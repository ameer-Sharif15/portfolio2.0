import { FaLocationArrow } from 'react-icons/fa6'
import { project_list } from '../helpers/data'
import { BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import React from 'react';

const Projects = () => {
    const scrollRef = React.useRef<any>();

    const scroll = (direction: string) => {
        const { current } = scrollRef;
  
        if (direction === 'left') {
          current.scrollLeft -= 810;
        } else {
          current.scrollLeft += 810;
        }
    }
    // project_list
  return (
    <div id='projects' className='bg-primary px-[1rem] md:px-[4rem] py-[3rem] md:py-[4rem] flex flex-col gap-5 md:flex-row overflow-hidden'>
    <div className="app__gallery-content md:min-w-[500px] overflow-hidden" data-aos="fade-right">
     {/* <SubHeading title="Instagram" /> */}
     <div className="flex flex-col gap-3  " >
                <p className="md:text-4xl text-2xl font-bold text-white">Explore</p>
                <FaLocationArrow className="swirl-in-fwd text-white "   />
            </div>
     <h1 className="text-6xl md:text-8xl text-gold font-bold">Project</h1>
     <p className="w-[22rem] md:w-auto" style={{ color: '#AAA', marginTop: '1rem'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repelllllat dolorem pariatur eaque culpa assumenda quidem dolore ducimus provident eum? MU</p>
       {/* <button type='button' className="custom__button">View More</button> */}
     </div>
yn
     <div className="relative " data-aos="fade-left">
       <div className="flex gap-[1rem] overflow-scroll " ref={scrollRef}>
         {project_list.map((image: {img: string, to: string}, index) => (
         <img key={index} src={image.img} alt="Project" className='w-[50rem] h-[30rem] rounded-3xl  cursor-pointer hover:opacity-80 '  />
         ))}
       </div>
       <div className="app__gallery-images_arrow">
         <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
         <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
       </div>
     </div>
   </div>
  )
}

export default Projects