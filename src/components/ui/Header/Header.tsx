"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../carousel";

export const Header = () => {
  const carrouselImages = [
    "https://image.tmdb.org/t/p/original/7SA0Rsiuw4PmyDoiO1Jm2j9lUN8.jpg",
    "https://image.tmdb.org/t/p/original/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg",
    "https://image.tmdb.org/t/p/original/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
    "https://image.tmdb.org/t/p/original/uQhYBxOVFU6s9agD49FnGHwJqG5.jpg",
    "https://image.tmdb.org/t/p/original/5HJqjCTcaE1TFwnNh3Dn21be2es.jpg",
  ];

  return (
    <header className="flex flex-col gap-2 justify-center items-center">
      <nav className="flex w-full">
        <div>
          <span>NavBar</span>
        </div>
        <ul className="flex w-full gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="/cinemas">Cinemas</a>
          </li>
        </ul>
      </nav>
      {/* TODO: Extract this to a component */}
      {/* TODO: Add a prop to change the image */}
      {/* TODO: Add animation to  */}
      <Carousel
        className="w-full border border-red-500"
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
      >
        <CarouselContent>
          {carrouselImages.map((item) => (
            <CarouselItem
              key={item}
              className="basis-full border border-blue-500"
            >
              <div className="h-[550px] w-full">
                <img
                  className="h-full w-full object-cover object-center"
                  src={item}
                  alt="imagen"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </header>
  );
};
