const models = require('./models');
const productServiceFactory = require('./product/productServiceFactory');
const merchantServiceFactory = require('./merchant/merchantServiceFactory');
const searchServiceFactory = require('./searchServiceFactory');

const modelDependencies = {
  MerchantModel: models.merchant,
  ProductModel: models.product,
};
module.exports = {
  product: productServiceFactory(modelDependencies),
  merchant: merchantServiceFactory(modelDependencies),
  search: searchServiceFactory(modelDependencies),
};
