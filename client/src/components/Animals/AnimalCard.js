// import { Button } from "bootstrap";
import React, { useState } from "react";
import { Card, Dimmer, Image, Button } from "semantic-ui-react";

export default function ProjectCard(props) {
  const { title, created, description, screenshot, github, deployed } = props;
  const [state, setState] = useState(false);

  const handleShow = () => setState(true);
  const handleHide = () => setState(false);

  return (
    <Card
      // className="AnimalCard"
      dimmed={state === true ? "true" : "false"}
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
    >
      <Image className="animalImage" src={screenshot} alt="screenshot" rounded/>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>Created in {created}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Dimmer active={state} className="inverted">
          <Button className="primary">Donate!</Button>
        </Dimmer>
      </Card.Content>
    </Card>
  );
}
