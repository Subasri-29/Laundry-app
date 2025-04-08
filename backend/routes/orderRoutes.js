const express = require('express');
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  trackOrderByPhone,
  updateOrderStatus,
} = require('../controllers/orderController');

// Create a new order
router.post('/', createOrder);

// Get all orders
router.get('/', getAllOrders);

// Track order by phone number
router.get('/track', trackOrderByPhone);

// Update order status by ID
router.put('/:id/status', updateOrderStatus);

module.exports = router;
