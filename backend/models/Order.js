// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   name: String,
//   phone: String,
//   address: String,
//   landmark: String,
//   clothCount: Number,
//   pickupTime: String,
//   instructions: String,
//   services: {
//     washing: Boolean,
//     drying: Boolean,
//     ironing: Boolean,
//   },
//   status: {
//     type: String,
//     enum: ['Pending', 'In Progress', 'Completed'],
//     default: 'Pending',
//   },
// }, { timestamps: true });

// module.exports = mongoose.model('Order', orderSchema);
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
    services: {
      washing: Boolean,
      drying: Boolean,
      ironing: Boolean,
    },
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Completed'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
