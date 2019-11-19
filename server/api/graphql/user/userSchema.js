const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    userId: String
    name: String
  }
`;

module.exports = typeDefs;
