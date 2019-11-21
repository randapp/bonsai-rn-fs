module.exports = ({ ProductModel, MerchantModel }) => {
  const getProducts = async (limit = 10) => {
    return ProductModel.find({}).limit(limit);
  };
  const getProductBrand = async product => {
    const merchant = await MerchantModel.findById(product.merchant).exec();
    console.log(merchant);
    return merchant.brands[product.belongsToBrand];
  };
  const getProduct = async id => {
    return ProductModel.findOne({ id });
  };
  return {
    getProducts,
    getProductBrand,
    getProduct,
  };
};
