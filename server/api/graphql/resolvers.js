const Product = require('./product/productResolvers');
const Search = require('./search/searchResolver');

const resolvers = {
  Query: { ...Product.Query, ...Search.Query },
  Mutation: {
    ...Product.Mutation,
  },
  ...Product.Resolvers,
  ...Search.Resolvers,
};

module.exports = resolvers;
