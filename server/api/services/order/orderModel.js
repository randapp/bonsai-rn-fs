const mongoose = require('mongoose');

const { Schema } = mongoose;

const Order = new Schema({
  id: Schema.Types.ObjectId,
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product' },
      quantity: Schema.Types.Number,
      priceAtOrderDate: Schema.Types.Number,
    },
  ],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  orderedOn: Schema.Types.Date,
});

// eslint-disable-next-line func-names
Order.virtual('total').get(function() {
  return this.items.reduce((total, item) => {
    return total + item.quantity * item.priceAtOrderDate;
  }, 0);
});

module.exports = mongoose.model('Order', Order);
