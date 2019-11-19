const Product = require('./productModel');

const Query = {
  products: async () => Product.find({}).limit(10),
};
const Mutation = {};
const Resolvers = {};

module.exports = {
  Query,
  Mutation,
  Resolvers,
};
