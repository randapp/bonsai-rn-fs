module.exports = ({ ProductModel, MerchantModel }) => {
  const getProducts = async (limit = 10) => {
    return ProductModel.find({}).limit(limit);
  };
  const getProductBrand = async product => {
    const merchant = await MerchantModel.findById(product.merchant).exec();
    return merchant.brands[product.belongsToBrand];
  };
  const getProduct = async id => {
    return ProductModel.findOne({ id });
  };
  const updatePopularity = async (productId, increment) => {
    console.log(productId);
    const product = await getProduct(productId);
    console.log(product);
    product.popularity += increment;
    await product.save();
    return product.popularity;
  };
  const updateStock = async item => {
    const product = await getProduct(item.product);
    product.quantity -= item.quantity;
    await product.save();
    return product;
  };

  const updateStocks = async items => Promise.all(items.map(updateStock));
  const price = async items => {
    return Promise.all(
      items.map(async item => {
        const { price: priceAtOrderDate } = await getProduct(item.product);
        console.log(priceAtOrderDate);
        return {
          ...item,
          priceAtOrderDate,
        };
      }),
    );
  };

  return {
    getProducts,
    getProductBrand,
    getProduct,
    updatePopularity,
    updateStocks,
    price,
  };
};
