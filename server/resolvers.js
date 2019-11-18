const Product = require("./productModel");

const resolvers = {
    Query: {
       products: async () => await Product.find({}).limit(10)
    },
  };
  
  module.exports = resolvers;