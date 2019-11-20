module.exports = {
  Query: {
    async merchants(_, args, { services }) {
      return services.merchant.getMerchants(args.limit);
    },
    async merchant(_, args, { services }) {
      return services.merchant.getMerchantById(args.id);
    },
  },
  Resolvers: {
    Merchant: {
      async products(merchant, args, { services }) {
        console.log(merchant);
        return services.merchant.getMerchantProducts(merchant._id, args.limit);
      },
    },
  },
};
