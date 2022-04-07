import React from "react";
import AnimalCard from "./AnimalCard";
// import Test from "./test.js";
import { Card, Dimmer, Segment } from "semantic-ui-react";

const Animals = () => {
  return (
    <div className="row">
      <Dimmer.Dimmable as={Segment}>
        <Card.Group centered stackable dimmable="true">
          <AnimalCard
            title="Recipe Search"
            created="2021"
            description="An application that you can search food recipes by entering a
                type of food and will return 6 recipies and nutritional facts
                about the recipe."
            screenshot={require("../../assets/Projects/screenshot.jpg")}
            github="https://github.com/cmrotruck/recipe-search"
            deployed="https://cmrotruck.github.io/recipe-search/"
          />
        </Card.Group>
      </Dimmer.Dimmable>
    </div>
  );
};

export default Animals;
