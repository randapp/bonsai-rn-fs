const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type OrderItem {
    product: Int!
    quantity: Int!
    name: String
  }
  input OrderItemInput {
    product: Int!
    quantity: Int!
  }
  type Order {
    items: [OrderItem!]
    user: User!
    id: String!
    total: Float!
    orderedOn: String!
  }
  input OrderInput {
    items: [OrderItemInput!]
    user: UserInput!
    id: String
  }

  extend type Query {
    orders(user: UserInput!): [Order]!
    order(id: Int): Order!
  }
  extend type Mutation {
    newOrder(input: OrderInput): Order
  }
`;

module.exports = typeDefs;
