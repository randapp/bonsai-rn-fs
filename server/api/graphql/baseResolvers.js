module.exports = {
  Query: {
    apiInfo() {
      return {
        version: '0.0.0',
        description: 'shop bonsai graphQL API',
      };
    },
  },
  Mutation: {
    async like(_, args, { services }) {
      const result = await services.analytics.like(args.userId, args.productId);
      console.log(result);
      return "product add to user's favorites";
    },
    async unlike(_, args, { services }) {
      const result = await services.analytics.unlike(args.userId, args.productId);
      console.log(result);
      return "product add to user's favorites";
    },
  },
  Resolvers: {
    User: {
      userId(user) {
        return user._id;
      },
      async orders(user, args, { services }) {
        console.log(user);
        return services.order.getUserOrders(user._id);
      },
    },
  },
};
