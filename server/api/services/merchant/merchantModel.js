const mongoose = require('mongoose');

const { Schema } = mongoose;

const merchant = new Schema({
  index: Number,
  guid: String,
  logo: String,
  dateCreated: String,
  publishedState: Boolean,
  brands: [String],
  name: String,
  commissionFee: String,
  contactEmail: String,
  phone: String,
  address: String,
  publishedDate: String,
  publishedBy: {
    userId: String,
  },
  companyDescription: String,
});

merchant.index({
  name: 'text',
  brands: 'text',
});

module.exports = mongoose.model('Merchant', merchant);
