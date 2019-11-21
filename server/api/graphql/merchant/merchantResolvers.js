module.exports = {
  Query: {
    async merchants(_, args, { services }) {
      return services.merchant.getMerchants(args.limit || 5);
    },
    async merchant(_, args, { services }) {
      return services.merchant.getMerchantById(args.id);
    },
  },
  Resolvers: {
    Merchant: {
      async products(merchant, args, { services }) {
        return services.merchant.getMerchantProducts(merchant._id, args.limit);
      },
      guid(merchant) {
        return merchant._id;
      },
    },
  },
};
