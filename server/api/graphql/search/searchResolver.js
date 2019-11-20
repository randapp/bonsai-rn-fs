const Query = {
  async search(_, args, { services }) {
    return services.search(args.query);
  },
};
const Resolvers = {
  SearchResult: {
    __resolveType(searchResult) {
      if (searchResult.price !== undefined) {
        return 'Product';
      }
      return 'Merchant';
    },
  },
};

module.exports = {
  Query,
  Resolvers,
};
