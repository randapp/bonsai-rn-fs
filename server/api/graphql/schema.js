const { gql } = require('apollo-server-express');
const ProductSchema = require('./product/productSchema');
const MerchantSchema = require('./merchant/merchantSchema');
const UserSchema = require('./user/userSchema');
const SearchSchema = require('./search/searchSchema');
const OrderSchema = require('./order/orderSchema');

const BaseSchema = gql`
  type APIInfo {
    description: String
    version: String
  }

  type Query {
    apiInfo: APIInfo
  }
  type Like {
    product: String
    total: Int
  }
  type Mutation {
    like(userId: String!, productId: String!): Like
    unlike(userId: String!, productId: String!): Like
  }
`;

module.exports = [BaseSchema, ProductSchema, MerchantSchema, UserSchema, OrderSchema, SearchSchema];
