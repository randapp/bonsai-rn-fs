const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    belongsToBrand: Int
    id: String
    name: String
    price: Float
    description: String
    color: String
    size: String
    quantity: Int
    image: String
  }
  extend type Query {
    products: [Product!]
  }
`;

module.exports = typeDefs;
