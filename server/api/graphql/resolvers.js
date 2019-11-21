const Product = require('./product/productResolvers');
const Search = require('./search/searchResolver');
const Merchant = require('./merchant/merchantResolvers');
const User = require('./user/userResolvers');
const Order = require('./order/orderResolvers');
const Base = require('./baseResolvers');

const resolvers = {
  Query: {
    ...Product.Query,
    ...Search.Query,
    ...Merchant.Query,
    ...User.Query,
    ...Order.Query,
    ...Base.Query,
  },
  Mutation: {
    ...Product.Mutation,
    ...Merchant.Mutation,
    ...User.Mutation,
    ...Order.Mutation,
    ...Base.Mutation,
  },
  ...Product.Resolvers,
  ...Search.Resolvers,
  ...Merchant.Resolvers,
  ...User.Resolvers,
  ...Order.Resolvers,
  ...Base.Resolvers,
};

module.exports = resolvers;
