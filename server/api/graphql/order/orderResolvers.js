module.exports = {
  Query: {
    async userOrders(_, args, { services }) {
      return services.order.getUserOrders(args.userId);
    },
    async orderDetails(_, args, { services }) {
      return services.order.getOrderDetails(args.orderId);
    },
  },
  Mutation: {
    async newOrder(_, args, { services }) {
      const result = await services.order.addOrder(args.input);
      console.log(result);
      return result;
    },
  },
  Resolvers: {
    Order: {
      user(order, args, { services }) {
        return services.order.getOrderOwner(order._id);
      },
      orderId(order) {
        return order._id;
      },
      async items(order, args, { services }) {
        return services.order.getOrderDetails(order._id);
      },
    },
  },
};
