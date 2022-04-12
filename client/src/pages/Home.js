import React from "react";
import Carousel, { CarouselItem } from "../components/Carousel";
import Reef from "../images/carousel/reef.jpg";
import Bonobo from "../images/carousel/bonobo.jpg";
import Bear from "../images/carousel/polarbear.jpg";
import { Image } from "semantic-ui-react";

const Home = () => {
  return (
    <main>
      <h1 className="homeHeading">Just a little change can have a BIG impact.</h1>
      <div className="home-carousel">
        <Carousel>
          <CarouselItem><Image className="carouselImage" src={Reef} alt="reef picture with facts" /></CarouselItem>
          <CarouselItem><Image className="carouselImage" src={Bonobo} alt="bonobo picture with facts" /></CarouselItem>
          <CarouselItem><Image className="carouselImage" src={Bear} alt="polar bear picture with facts" /></CarouselItem>
        </Carousel>
      </div>
    </main>
  );
};

export default Home;
