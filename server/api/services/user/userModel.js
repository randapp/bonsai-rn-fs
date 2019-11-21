const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  name: String,
  email: String,
  likes: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
});

module.exports = mongoose.model('User', User);
