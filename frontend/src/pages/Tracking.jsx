import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

export default function Tracking() {
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(null);
  const [name, setName] = useState(null);
  const [error, setError] = useState(null);

  const handleTrack = async () => {
    if (phone.trim() === '') {
      alert('Please enter your Phone Number');
      return;
    }

    try {
      const res = await axios.get('http://localhost:5000/api/orders/track', {
        params: { q: phone },
      });

      if (res.data && res.data.status) {
        setStatus(res.data.status);
        setName(res.data.name);
        setError(null);
      } else {
        setStatus(null);
        setName(null);
        setError('Order not found');
      }
    } catch (err) {
      setStatus(null);
      setName(null);
      setError('Something went wrong. Try again.');
      console.error(err);
    }
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
        type="tel"
        placeholder="Enter your Phone Number"
        className="w-full p-3 border rounded-md mb-4"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
          setStatus(null);
          setError(null);
          setName(null);
        }}
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
        {(status || error) && (
          <motion.div
            className="mt-6 text-center"
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {name && (
              <>
                <p className="text-lg font-medium text-gray-700">Customer:</p>
                <p className="text-xl font-semibold text-blue-800">{name}</p>
              </>
            )}

            {status && (
              <>
                <p className="mt-4 text-lg font-medium text-gray-700">Current Status:</p>
                <p className="mt-2 text-2xl font-bold text-purple-800">{status}</p>
              </>
            )}

            {error && (
              <p className="mt-4 text-red-600 font-medium">{error}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
