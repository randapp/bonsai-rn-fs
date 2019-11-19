const search = async (_, args, ctx) => {
  console.log(args);
  const query = { $text: { $search: args.query } };

  const results = await Promise.all([
    ctx.models.product.find(query).exec(),
    ctx.models.merchant.find(query).exec(),
  ]);
  return [].concat(...results);
};

const Query = {
  search,
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
