const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Merchant {
    index: Int
    guid: String
    logo: String
    dateCreated: String
    publishedState: Boolean
    brands: [String]
    name: String
    products(limit: Int): [Product]
    commissionFee: String
    contactEmail: String
    phone: String
    address: String
    publishedDate: String
    publishedBy: User
    companyDescription: String
  }

  extend type Query {
    merchant(id: Int): Merchant!
    merchants: [Merchant]!
  }
  extend type Mutation {
    editMerchant(publishedState: Boolean!): Merchant
  }
`;

module.exports = typeDefs;
