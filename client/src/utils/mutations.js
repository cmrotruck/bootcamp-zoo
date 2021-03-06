import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ANIMAL = gql`
  mutation AddAnimal($breed: String!, $animalText: String!, $quantity: Int) {
    addAnimal(breed: $breed, animalText: $animalText, quantity: $quantity) {
      _id
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postBody: String!, $animalId: String!) {
    addPost(postBody: $body, animalId: $animalId) {
      _id
      postBody
      createdAt
      username
      postCount
      comments {
        _id
        commentBody
        username
        createdAt
      }
    }
  }
`;
