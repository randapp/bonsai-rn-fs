const models = require('./models');

const modelDependencies = {
  MerchantModel: models.merchant,
  ProductModel: models.product,
  UserModel: models.user,
  OrderModel: models.order,
};
const product = require('./product/productServiceFactory')(modelDependencies);
const merchant = require('./merchant/merchantServiceFactory')(modelDependencies);
const search = require('./searchServiceFactory')(modelDependencies);
const user = require('./user/userServiceFactory')(modelDependencies);
const order = require('./order/orderServiceFactory')({
  UserService: user,
  ProductService: product,
  ...modelDependencies,
});

module.exports = {
  product,
  merchant,
  search,
  user,
  order,
};
