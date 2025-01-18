import { Link } from 'react-scroll';

const Navbar = () => {
    const nav_item = [{name: 'Home',href: '#home'},{name: 'About',href: '#about'},{name: 'Projects',href: '/projects'},{name: 'Awards',href: '/awards'},{name: 'Contact',href: '/contact'},
    ]
  return (
    <div className="flex items-center bg-primary w-full py-4 px-8 justify-between fixed top-0 z-30">
        <h1 className="md:text-3xl text-lg text-crimson font-bold capitalize bounce-in-left1">portfolio</h1>
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
        <div className=""></div>
    </div>
  )
}

export default Navbar