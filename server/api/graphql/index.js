const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const services = require('../services');

module.exports = {
  typeDefs,
  resolvers,
  context: {
    services,
  },
};
