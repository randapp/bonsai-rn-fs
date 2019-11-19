const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  id: String,
  name: String,
  email: String,
  phone: String,
  address: String,
});

module.exports = mongoose.model('User', User);
