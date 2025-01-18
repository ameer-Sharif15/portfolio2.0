import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselComponent({items}: {items: {img: string, to?: string}[]}) {
  const plugin = React.useRef(
    Autoplay({ delay: 80000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[55rem]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      
    >
      <CarouselContent>
        {items.map((item:{img: string, to?: string} , index: number) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card  >
                 <img src={item.img} alt="" className="w-full rounded-xl h-[40rem]" />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-gold hidden md:block rounded-sm h-[20rem] w-[4rem] border-none -left-[6rem]" />
      <CarouselNext className="bg-gold hidden md:block rounded-sm h-[20rem] w-[4rem] border-none -right-[6rem]" />
    </Carousel>
  )
}
