// const Order = require('../models/Order');

// exports.createOrder = async (req, res) => {
//   try {
//     const {
//       name,
//       phone,
//       address,
//       landmark,
//       clothCount,
//       pickupTime,
//       instructions,
//       services
//     } = req.body;

//     const newOrder = new Order({
//       name,
//       phone,
//       address,
//       landmark,
//       clothCount,
//       pickupTime,
//       instructions,
//       services,
//     });

//     await newOrder.save();
//     res.status(201).json(newOrder);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().sort({ createdAt: -1 });
//     res.json(orders);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const {
      name,
      phone,
      address,
      landmark,
      clothCount,
      pickupTime,
      instructions,
      services,
    } = req.body;

    const newOrder = new Order({
      name,
      phone,
      address,
      landmark,
      clothCount,
      pickupTime,
      instructions,
      services,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.trackOrderByPhone = async (req, res) => {
  try {
    const { q } = req.query;
    const order = await Order.findOne({ phone: q }).sort({ createdAt: -1 });
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json({ status: order.status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
