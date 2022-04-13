import React from "react";
import Logo from "../images/logo/zoologo.jpg";
import { Image } from "semantic-ui-react";

const About = () => {
  return (
    <main>
      <Image className="animalImage" src={Logo} alt="bootcamp zoo logo" rounded />
      <h1 className="aboutHeading">Who We Are.</h1>
      <p className="about">Bootcamp Zoo is a place where everyone can come together and share there love for animals and help build habitats for them.</p>
      <p className="about">Come explore our animals and find your place in our projects.</p>
    </main>
  );
};

export default About;
