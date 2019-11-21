const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type OrderItem {
    product: String!
    quantity: Int!
    name: String
  }
  input OrderItemInput {
    product: String!
    quantity: Int!
  }
  type Order {
    orderId: String!
    items: [OrderItem!]
    user: User!
    total: Float
    orderedOn: String
  }
  input OrderInput {
    items: [OrderItemInput!]
    userId: String!
  }

  extend type Query {
    userOrders(userId: String!): [Order]!
    orderDetails(orderId: String!): Order!
  }
  extend type Mutation {
    newOrder(input: OrderInput): Order
  }
`;

module.exports = typeDefs;
