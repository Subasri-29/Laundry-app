const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    address: String,
    landmark: String,
    clothCount: Number,
    pickupTime: String,
    instructions: String,
    services: [String],
    status: {
      type: String,
      default: 'Pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
