import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ANIMAL } from "../utils/queries";
import Conversation from "../components/Conversation/Conversation";
// import Cheetah from "../images/animals/cheeta.JPG";

const Donate = () => {
  const { id: animalId } = useParams();

  const { loading, data } = useQuery(QUERY_ANIMAL, {
    variables: { id: animalId },
  });
  const animal = data?.animal || [];

  console.log(animalId, animal);
  let breedName = "";

  if (animal.breed) {
    breedName = animal.breed.replace(/\s/g, "").toLowerCase();
  }

  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Conversation
          breed={animal.breed}
          donations={"$" + animal.donationTotal}
          description={animal.animalText}
          image={require(`../images/animals/${breedName}.JPG`)}
        />
      )}
    </main>
  );
};

export default Donate;
