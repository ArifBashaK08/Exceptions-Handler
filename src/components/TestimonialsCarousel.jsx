import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export const TestimonialsCarousel = ({ data }) => {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true
            }}
            className="w-full p-20"
        >
            <CarouselContent>
                {data.map(({ reviewer, review }, index) => (
                    <CarouselItem key={index} className="w-full md:basis-1 lg:basis-1/2">
                        <div className="p-1">
                            <Card>
                                <CardContent className="min-h-[18rem] p-4 md:p-10 flex flex-col gap-4 items-center justify-center rounded-md">
                                    <p className="lg:text-xl text-pretty text-center">{review}</p>
                                    <h1 className="font-bold text-lg">{reviewer}</h1>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
