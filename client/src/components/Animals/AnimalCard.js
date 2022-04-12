// import { Button } from "bootstrap";
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import { Card, Dimmer, Image, Button } from "semantic-ui-react";

export default function ProjectCard(props) {
  const { _id, breed, created, description, screenshot } = props;
  const [state, setState] = useState(false);

  const handleShow = () => setState(true);
  const handleHide = () => setState(false);

  const handleDonateClick = () => {
    //navigate to the donate page
    console.log("Donate!");
  };

  return (
    <Card
      // className="AnimalCard"
      dimmed={state === true ? "true" : "false"}
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
    >
      <Image
        className="animalImage"
        src={screenshot}
        alt="screenshot"
        rounded
      />
      <Card.Content>
        <Card.Header>{breed}</Card.Header>
        <Card.Meta>Habitat last updated in {created}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Dimmer active={state} className="inverted">
          <Button
            className="primary cardButton"
            as={Link}
            to={`/conversation/${_id}`}
          >
            Join the conversation!
          </Button>
          <Button className="primary cardButton" onClick={handleDonateClick}>
            Donate!
          </Button>
        </Dimmer>
      </Card.Content>
    </Card>
  );
}
