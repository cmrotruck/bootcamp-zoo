import React from "react";
import Carousel, { CarouselItem } from "../components/Carousel";

const Home = () => {
  return (
    <main>
      <div className="flex-row justify-space-between">
        <p>Just a little change can have a big impact.</p>
      </div>
      <div className="home-carousel">
        <Carousel>
          <CarouselItem>Testimony 1</CarouselItem>
          <CarouselItem>Testimony 2</CarouselItem>
          <CarouselItem>Testimony 3</CarouselItem>
        </Carousel>
      </div>
    </main>
  );
};

export default Home;
