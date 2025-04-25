'use client';

import Autoplay from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from '../carousel';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const DELAY_SLIDES = 10000;

export const HeroCarousel = () => {
    const [api, setApi] = useState<CarouselApi | null>(null);
    const [activeSlideIdx, setActiveSlideIdx] = useState(0);
    const [mounted, setMounted] = useState(false);

    // Replace this with images from the API
    const carouselImages = [
        'https://image.tmdb.org/t/p/original/7SA0Rsiuw4PmyDoiO1Jm2j9lUN8.jpg',
        'https://image.tmdb.org/t/p/original/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg',
        'https://image.tmdb.org/t/p/original/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg',
        'https://image.tmdb.org/t/p/original/uQhYBxOVFU6s9agD49FnGHwJqG5.jpg',
        'https://image.tmdb.org/t/p/original/5HJqjCTcaE1TFwnNh3Dn21be2es.jpg',
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!api) return;

        const autoplay = api.plugins().autoplay;
        if (!autoplay) return;

        api.on('select', () => {
            const selectedIndex = api.selectedScrollSnap();
            setActiveSlideIdx(selectedIndex);
        });
    }, [api]);

    return (
        <>
            <Carousel
                setApi={setApi}
                opts={{
                    loop: true,
                    align: 'center',
                    duration: 50,
                }}
                plugins={[
                    Autoplay({
                        delay: DELAY_SLIDES,
                        stopOnInteraction: false,
                    }),
                ]}
                className="h-full after:content-[''] after:absolute after:top-0 after:right-0 after:w-1/3 after:h-full after:bg-gradient-to-r after:from-transparent after:to-slate-950 before:content-[''] before:absolute before:top-0 before:left-0 before:w-1/3 before:h-full before:bg-gradient-to-l before:from-transparent before:to-slate-950 before:z-10"
            >
                <CarouselContent className="w-full min-h-[400px] h-[500px]">
                    {carouselImages.map((img, idx) => (
                        <CarouselItem className="basis-10/12 h-full" key={idx}>
                            <div
                                className={cn(
                                    'w-full h-full transition-transform duration-1000 z-0',
                                    activeSlideIdx === idx
                                        ? 'scale-105'
                                        : 'scale-95',
                                )}
                            >
                                <img
                                    src={img}
                                    alt={`image`}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Carousel Controls */}
            <CarouselControls
                api={api}
                activeSlideIdx={activeSlideIdx}
                mounted={mounted}
                carouselImages={carouselImages}
            />
        </>
    );
};

export const CarouselControls = ({
    api,
    activeSlideIdx,
    mounted,
    carouselImages,
}: {
    api: CarouselApi | null;
    activeSlideIdx: number;
    mounted: boolean;
    carouselImages: string[];
}) => {
    return (
        <div className="flex justify-center gap-2 p-5">
            {carouselImages.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => {
                        api?.scrollTo(idx);
                        api?.plugins().autoplay.reset();
                    }}
                    // Replace this transition to an animation
                    className={cn(
                        'w-4 h-4 bg-transparent border border-white rounded-full transition-all duration-300 overflow-hidden before:flex before:content-[""] before:w-full before:h-full before:transition-transform before:-translate-x-full before:ease-linear before:bg-white',
                        mounted && activeSlideIdx === idx
                            ? 'w-16 before:duration-10000 before:translate-x-0'
                            : 'w-4',
                    )}
                />
            ))}
        </div>
    );
};
