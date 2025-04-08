// controllers/schedulerController.js
exports.schedulePickupDelivery = (req, res) => {
    const { pickupDate, deliveryDate } = req.body;
  
    if (!pickupDate || !deliveryDate) {
      return res.status(400).json({ message: 'Both dates required' });
    }
  
    res.json({ message: 'Pickup & Delivery scheduled', pickupDate, deliveryDate });
  };
  