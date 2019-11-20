const Product = require('./product/productResolvers');
const Search = require('./search/searchResolver');
const Merchant = require('./merchant/merchantResolvers');

const resolvers = {
  Query: { ...Product.Query, ...Search.Query, ...Merchant.Query },
  Mutation: {
    ...Product.Mutation,
    ...Merchant.Mutation,
  },
  ...Product.Resolvers,
  ...Search.Resolvers,
  ...Merchant.Resolvers,
};

module.exports = resolvers;
