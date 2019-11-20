module.exports = ({ MerchantModel, ProductModel }) => {
  const getMerchants = async (limit = 10) => MerchantModel.find({}).limit(limit);

  const getMerchantById = async id => MerchantModel.findById(id).exec();

  const getMerchantProducts = async (merchantId, limit) => {
    return ProductModel.find({ merchant: merchantId })
      .limit(limit || 10)
      .exec();
  };
  return {
    getMerchants,
    getMerchantById,
    getMerchantProducts,
  };
};
