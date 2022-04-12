import React, { useState } from "react";
import { Grid, Image, Button, Comment, Header, Form } from "semantic-ui-react";

export default function ProjectCard(props) {
  const { breed, donations, description, image, username, createdAt, commentBody, postBody } = props;

  return (
    <Grid>
      <Grid.Column width={7}>
        <Image className="animalImage" src={image} alt={breed} rounded />
      </Grid.Column>
      <Grid.Column width={9}>
        <h1>{breed}</h1>
        <h2>Total donations: {donations}</h2>
        <p>{description}</p>
        <Button className="primary">Donate!</Button>
        <h2>Posts</h2>
        <p>{postBody}</p>
        <Comment.Group>
          <Header as='h3'>Comments</Header>
          <Comment.Content>
            <Comment.Author>{username}</Comment.Author>
            <Comment.Metadata>{createdAt}</Comment.Metadata>
            <Comment.Text>{commentBody}</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Form reply>
            <Form.TextArea />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
          </Form>
        </Comment.Group>

      </Grid.Column>
    </Grid>
  );
}