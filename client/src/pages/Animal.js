import React from "react";
import AnimalCard from "../components/Animals/AnimalCard";
import { Card, Dimmer, Segment } from "semantic-ui-react";
import Cheetah from "../images/animals/cheetah.JPG";

const Animals = () => {
  return (
    <Dimmer.Dimmable as={Segment}>
      <Card.Group centered stackable dimmable="true">
        <AnimalCard
          title="Recipe Search"
          created="2021"
          description="Population status is valnerable. Cheetahs are the most endangered cat in Africa, only an estimated 7,000-10,000 remain. Molecular genetic studies on free-ranging and captive cheetahs have shown that the species lacks genetic variation, probably due to past inbreeding. The consequences of such genetic uniformity have led to reproductive abnormalities, high infant mortality, and greater susceptibility to disease, causing the species to be less adaptable and more vulnerable to ecological and environmental changes."
          screenshot={Cheetah}
          github="https://github.com/cmrotruck/recipe-search"
          deployed="https://cmrotruck.github.io/recipe-search/"
        />

        {/* <AnimalCard
          title="Recipe Search"
          created="2021"
          description="Population status is valnerable. Cheetahs are the most endangered cat in Africa, only an estimated 7,000-10,000 remain. Molecular genetic studies on free-ranging and captive cheetahs have shown that the species lacks genetic variation, probably due to past inbreeding. The consequences of such genetic uniformity have led to reproductive abnormalities, high infant mortality, and greater susceptibility to disease, causing the species to be less adaptable and more vulnerable to ecological and environmental changes."
          screenshot={Cheetah}
          github="https://github.com/cmrotruck/recipe-search"
          deployed="https://cmrotruck.github.io/recipe-search/"
        /> */}
      </Card.Group>
    </Dimmer.Dimmable>
  );
};

export default Animals;
