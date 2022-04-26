//import the graphql (gql) tagged template function
const { gql } = require("apollo-server-express");

//create our typeDefs
const typeDefs = gql`
  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }
  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }
  type Comment {
    commentBody: String
    username: String
    createdAt: String
  }
  type Post {
    _id: ID
    postBody: String
    username: String
    createdAt: String
    animalID: String
    comments: [Comment]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Post {
    _id: ID
    postBody: String
    username: String
    createdAt: String
    animalID: String
    comments: [Comment]
  }
  type Comment {
    commentBody: String
    username: String
    createdAt: String
  }
  type Animal {
    _id: ID
    breed: String
    animalText: String
    createdAt: String
    quantity: Int
    donationTotal: Int
    posts: [Post]
  }
  type Query {
    me: User
    animals: [Animal]
    animal(_id: String!): Animal
    users: [User]
    user(username: String!): User
    posts(animalID: ID!): Post
    allPosts: [Post]
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addAnimal(breed: String!, animalText: String!, quantity: Int): Animal
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
    addPost(postBody: String!, animalId: String!, username: String!): Post
    addReply(_id: ID!, title: String!, body: String!): User
  }
`;

//export the typeDefs
module.exports = typeDefs;
