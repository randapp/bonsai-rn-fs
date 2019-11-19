const { gql } = require('apollo-server-express');
const ProductSchema = require('./product/productSchema');
const MerchantSchema = require('./merchant/merchantSchema');
const UserSchema = require('./user/userSchema');
const SearchSchema = require('./search/searchSchema');

const BaseSchema = gql`
  type APIInfo {
    description: String
    version: String
  }
  input APIInfoInput {
    description: String
    version: String
  }

  type Query {
    apiInfo: APIInfo
  }
  type Mutation {
    UpdateAPIInfo(input: APIInfoInput!): APIInfo
  }
`;

module.exports = [SearchSchema, BaseSchema, ProductSchema, MerchantSchema, UserSchema];
