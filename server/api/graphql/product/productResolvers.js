const Mutation = {};

module.exports = {
  Query: {
    async products(_, args, { services }) {
      return services.product.getProducts(args.limit);
    },
  },
  Mutation,
  Resolvers: {
    Product: {
      async belongsToBrand(product, args, { services }) {
        return services.product.getProductBrand(product);
      },
      likedBy(product) {
        return product.popularity;
      },
    },
  },
};
