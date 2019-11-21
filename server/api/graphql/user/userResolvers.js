module.exports = {
  Query: {
    async users(_, args, { services }) {
      return services.user.getUsers(args.limit);
    },
    async user(_, args, { services }) {
      return services.user.getUser(args.userId);
    },
  },
  Mutation: {
    async newUser(_, args, { services }) {
      const result = await services.user.addUser(args.user);
      return result;
    },
  },
  Resolvers: {
    User: {
      userId(user) {
        return user._id;
      },
      async orders(user, args, { services }) {
        return services.order.getUserOrders(user._id);
      },
    },
  },
};
