import React, { useState } from "react";
import { Grid, Image, Button } from "semantic-ui-react";

export default function ProjectCard(props) {
  const { title, donations, description, image } = props;

  return (
    <Grid>
        <Grid.Column width={7}>
            <Image className="animalImage" src={image} alt="screenshot" rounded/>
        </Grid.Column>
        <Grid.Column width={9}>
            <h1>{title}</h1>
            <h2>Total donations: {donations}</h2>
            <p>{description}</p>
            <Button className="primary">Donate!</Button>
        </Grid.Column>
    </Grid>
  );
}