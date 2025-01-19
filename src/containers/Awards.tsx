// import React from 'react'

import { ad1 } from "@/assets"
import { CarouselComponent } from "@/components/Carousel"
import { FaLocationArrow } from "react-icons/fa6"

const Awards = () => {
    const awards = [
        {
            img: ad1,
            to: ''
        }
    ]
  return (
    <div id="awards" className="bg-primary px-[1rem] md:px-[4rem] py-[4rem] flexc flex-col gap-10 ">
        <div className="flex flex-col gap-3 " >
            <p className="text-4xl font-bold text-white">Awards / Certifcates</p>
            <FaLocationArrow className="swirl-in-fwd text-white "   />
        </div>
        <div className="w-full flex justify-center">
                <CarouselComponent items={awards} />
        </div>
    </div>
  )
}

export default Awards