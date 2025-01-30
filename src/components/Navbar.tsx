import { Link } from 'react-scroll';
// import { CgMenuRight } from "react-icons/cg";
// import { RiCloseLargeFill } from "react-icons/ri";4
import { LuPanelLeftClose } from "react-icons/lu";
import { LuPanelRightClose } from "react-icons/lu";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
    const nav_item = [{name: 'Home',href: 'home'},{name: 'About',href: 'about'},{name: 'Projects',href: 'projects'},{name: 'Awards',href: 'awards'},{name: 'Contact',href: 'contact'},
    ]

    const handleOpen = () => {
      setIsOpen(() => !isOpen)
    }
  return (
    <div className="  flex items-center overflow-hidden bg-primary w-full max-w-[1500px] py-4 px-4 md:px-8 justify-between fixed top-0 z-30">
        <h1 className="md:text-3xl text-lg text-crimson font-bold capitalize bounce-in-left1">portfolio</h1>
        {/* <div className="block md:hidden" onClick={handleOpen}>
          <LuPanelLeftClose className='text-gold text-2xl cursor-pointer' /> 
        </div> */}
        {isOpen ? (
          <div  className="bg-primary shadow-md w-4/5 border h-screen absolute right-0 top-0 px-4 py-4 flex flex-col border-gold">
              <LuPanelRightClose className='text-gold text-2xl cursor-pointer self-end' onClick={handleOpen}  /> 
              <ul className="flex flex-col items-end gap-4 slide-down md:hidden mt-[2rem]  ">
                  {nav_item.map((item: {name: string, href: string}, index: number) => (
                    <Link
                    key={index}
                    to={item.href}
                    smooth
                    duration={500}
                    className="text-gold cursor-pointer hover:text-gry text-base leading-[28px] tracking-[.04em]"
                    >
                          {item.name}
                      </Link>
                  ))}
              </ul>
        </div>
          ) : ''} 
         <ul className="items-center gap-4 slide-down hidden md:flex ">
            {nav_item.map((item: {name: string, href: string}, index: number) => (
                   <Link
                   key={index}
                   to={item.href}
                   smooth
                   duration={500}
                   className="text-white cursor-pointer hover:text-gry text-base leading-[28px] tracking-[.04em]"
                 >
                    {item.name}
                 </Link>
            ))}
        </ul>
    </div>
  )
}

export default Navbar