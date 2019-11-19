const { merchants } = require('./mockMerchantData');
const Merchant = require('../models/MerchantModel');
const Product = require('../models/productModel');

// eslint-disable-next-line no-unused-vars
function handleError(err) {}

const seed = async () => {
  if ((await Merchant.countDocuments()) === 0 && (await Product.countDocuments()) === 0) {
    merchants.forEach(({ products, ...restMerchant }) => {
      const MerchantObject = new Merchant(restMerchant);
      MerchantObject.save(err => {
        if (err) return handleError(err);
        console.log(`Merchant ${MerchantObject.name} inserted!`);
      });
      products.forEach(product => {
        const {
          belongsToBrand,
          id,
          name,
          price,
          description,
          color,
          size,
          quantity,
          image,
        } = product;
        const ProductObject = new Product({
          belongsToBrand,
          id,
          name,
          price,
          description,
          color,
          size,
          quantity,
          image,
          merchant: MerchantObject._id,
        });
        ProductObject.save(err => {
          if (err) return handleError(err);
          console.log(`Product ${ProductObject.name} inserted!`);
        });
      });
    });
  }
};
module.exports = seed;
