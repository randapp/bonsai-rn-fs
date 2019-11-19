const Product = require('../models/productModel');

const resolvers = {
  Query: {
    products: async () => Product.find({}).limit(10),
  },
};

module.exports = resolvers;
