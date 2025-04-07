import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Tracking() {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState(null);

  const mockStatuses = [
    'Picked Up ✅',
    'Washing 🧼',
    'Drying 🌬',
    'Ironing 👕',
    'Out for Delivery 🚚',
    'Delivered 🎉',
  ];

  const handleTrack = () => {
    if (orderId.trim() === '') {
      alert('Please enter an Order ID or Phone Number');
      return;
    }

    // simulate fetching random status
    const randomStatus = mockStatuses[Math.floor(Math.random() * mockStatuses.length)];
    setStatus(randomStatus);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-xl"
    >
      <motion.h2
        className="text-2xl font-bold text-purple-600 text-center mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Track Your Laundry Status 📍
      </motion.h2>

      <motion.input
        type="text"
        placeholder="Enter Order ID or Phone Number"
        className="w-full p-3 border rounded-md mb-4"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      />

      <motion.button
        onClick={handleTrack}
        className="w-full bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ delay: 0.4 }}
      >
        Check Status
      </motion.button>

      <AnimatePresence>
        {status && (
          <motion.div
            className="mt-6 text-center"
            key={status}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg font-medium text-gray-700">Current Status:</p>
            <p className="mt-2 text-2xl font-bold text-purple-800">{status}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
