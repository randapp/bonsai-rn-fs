const mongoose = require('mongoose');

const { Schema } = mongoose;

const Order = new Schema({
  items: [
    {
      product: Schema.Types.String,
      quantity: Schema.Types.Number,
      priceAtOrderDate: Schema.Types.Number,
    },
  ],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  orderedOn: Schema.Types.Date,
  total: Schema.Types.Number,
});

module.exports = mongoose.model('Order', Order);
