const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const Mongoose = require('mongoose');
const seed = require('./api/db/seed');
const typeDefs = require('./api/graphql/schema');
const resolvers = require('./api/graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
const PORT = 8080;

server.applyMiddleware({ app });

Mongoose.Promise = global.Promise;
Mongoose.connect(
  'mongodb://localhost/vanhack-bonsai',
  { useUnifiedTopology: true, useNewUrlParser: true },
  err => {
    if (err) {
      return err;
    }
  },
);

seed();

app.listen(PORT, () =>
  console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphql`),
);
