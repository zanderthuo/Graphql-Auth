const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Your schema will go here
  type User {
    id: ID!
    username: String
    email: String
    password: String
  }

  type AuthData {
    email: String
    password: String
  }

  type Query {
    getAll: [User]
    login(email: String!, password: String!): AuthData
  }

  input UserInput {
    username: String
    email: String
    password: String
  }

  type Mutation {
    createUser(user: UserInput): User
    updateUser(id: String, user: UserInput): User
    deleteUser(id: String): String
  }
`;

module.exports = typeDefs;