// // routes/orderRoutes.js
// const express = require('express');
// const router = express.Router();
// const { createOrder, getAllOrders } = require('../controllers/orderController');

// router.post('/', createOrder);
// router.get('/', getAllOrders);

// module.exports = router;
const express = require('express');
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  trackOrderByPhone,
} = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/track', trackOrderByPhone); // Track order by phone number

module.exports = router;
