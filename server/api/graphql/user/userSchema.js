const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input UserInput {
    userId: String!
    email: String!
    name: String!
    address: String
  }
  type User {
    userId: String!
    email: String
    name: String
    address: String
  }
`;

module.exports = typeDefs;
