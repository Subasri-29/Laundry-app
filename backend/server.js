require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const orderRoutes = require('./routes/orderRoutes');
const schedulerRoutes = require('./routes/schedulerRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/api/orders', orderRoutes);
app.use('/api/scheduler', schedulerRoutes);

app.get('/', (req, res) => res.send('🧼 Laundry App API is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
