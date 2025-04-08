const Order = require('../models/Order');

// Create a new order
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

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Track latest order by phone
exports.trackOrderByPhone = async (req, res) => {
  try {
    const { q } = req.query;

    const latestOrder = await Order.find({ phone: q })
      .sort({ createdAt: -1 })
      .limit(1);

    if (!latestOrder || latestOrder.length === 0)
      return res.status(404).json({ message: 'Order not found' });

    res.status(200).json({
      status: latestOrder[0].status,
      name: latestOrder[0].name,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedOrder)
      return res.status(404).json({ message: 'Order not found' });

    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
