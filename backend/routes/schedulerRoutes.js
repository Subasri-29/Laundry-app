// routes/schedulerRoutes.js
const express = require('express');
const router = express.Router();
const { schedulePickupDelivery } = require('../controllers/schedulerController');

router.post('/', schedulePickupDelivery);

module.exports = router;
