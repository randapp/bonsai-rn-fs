module.exports = ({ ProductModel, MerchantModel }) => {
  const getProducts = async (limit = 10) => {
    return ProductModel.find({}).limit(limit);
  };
  const getProductBrand = async product => {
    console.log(product.merchant);
    const merchant = await MerchantModel.findById(product.merchant).exec();
    console.log(merchant);
    return merchant.brands[product.belongsToBrand];
  };
  return {
    getProducts,
    getProductBrand,
  };
};
