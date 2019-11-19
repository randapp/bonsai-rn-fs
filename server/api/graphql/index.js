const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('./models');

module.exports = {
  typeDefs,
  resolvers,
  context: {
    models,
  },
};
