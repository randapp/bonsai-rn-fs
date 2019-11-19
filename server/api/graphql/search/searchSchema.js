const { gql } = require('apollo-server-express');

const typeDefs = gql`
  union SearchResult = Product | Merchant

  extend type Query {
    search(query: String!): [SearchResult]!
  }
`;

module.exports = typeDefs;
