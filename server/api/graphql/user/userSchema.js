const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input UserInput {
    email: String!
    name: String!
    address: String
  }
  type User {
    userId: String!
    email: String
    name: String
    address: String
    orders: [Order]!
  }
  extend type Query {
    users: [User]!
    user(userId: String): User
  }
  extend type Mutation {
    newUser(user: UserInput!): User!
  }
`;

module.exports = typeDefs;
