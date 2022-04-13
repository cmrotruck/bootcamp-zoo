import React from "react";
import AnimalCard from "../components/Animals/AnimalCard";
import { Card, Dimmer, Segment } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { QUERY_ANIMALS } from "../utils/queries";

const Animals = () => {
  const { loading, data } = useQuery(QUERY_ANIMALS);
  const animals = data?.animals || [];

  return (
    <Dimmer.Dimmable as={Segment}>
      <Card.Group centered stackable dimmable="true">
        {loading ? (
          <div>Loading...</div>
        ) : (
          animals &&
          animals.map((animal) => {
            let breedName = animal.breed.replace(/\s/g, "").toLowerCase();
            console.log(breedName);
            return (
              <AnimalCard
                _id={animal._id}
                breed={animal.breed}
                created="2021"
                description={animal.animalText}
                screenshot={require(`../images/animals/${breedName}.JPG`)}
              />
            );
          })
        )}
      </Card.Group>
    </Dimmer.Dimmable>
  );
};

export default Animals;
