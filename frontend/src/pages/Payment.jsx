// 👇 Your imports
import { useState } from 'react';
import { motion } from 'framer-motion';
import PickupDeliveryScheduler from '../components/PickupDeliveryScheduler';

export default function Payment() {
  const [items, setItems] = useState([
    { name: 'Shirt', price: 30, quantity: 0 },
    { name: 'Pants', price: 40, quantity: 0 },
    { name: 'Bedsheet', price: 60, quantity: 0 },
    { name: 'Towel', price: 20, quantity: 0 },
    { name: 'Saree', price: 80, quantity: 0 },
    { name: 'Jeans', price: 50, quantity: 0 },
    { name: 'Jacket', price: 70, quantity: 0 },
    { name: 'Blazer', price: 100, quantity: 0 },
    { name: 'Curtain', price: 90, quantity: 0 },
    { name: 'Blanket', price: 120, quantity: 0 },
  ]);

  const [customItem, setCustomItem] = useState('');
  const [customPrice, setCustomPrice] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleQuantityChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = parseInt(value) || 0;
    setItems(updatedItems);
  };

  const handleAddCustomItem = () => {
    if (customItem.trim() && !isNaN(customPrice) && Number(customPrice) > 0) {
      setItems([
        ...items,
        {
          name: customItem.trim(),
          price: parseInt(customPrice),
          quantity: 0,
        },
      ]);
      setCustomItem('');
      setCustomPrice('');
    } else {
      alert('Enter a valid item name and price.');
    }
  };

  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    if (totalAmount === 0) {
      alert('Please select items before payment.');
    } else {
      alert(`Payment of ₹${totalAmount} successful!`);
    }
  };

  return (
    <div className={darkMode ? 'dark min-h-screen bg-gray-900' : 'min-h-screen bg-blue-100'}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl dark:bg-gray-800 dark:text-white"
      >
        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-4 py-1 rounded-md bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
          >
            Toggle {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>

        <h2 className="text-2xl font-bold text-yellow-600 mb-4 text-center">
          Laundry Cost Estimation 💰
        </h2>

        {/* 🧺 Service Categories */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300 text-center">
            Service Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {['Regular Wash', 'Dry Cleaning', 'Ironing', 'Express Delivery'].map((category, idx) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={idx}
                className={`p-4 rounded-lg shadow transition ${
                  idx === 0
                    ? 'bg-yellow-100 dark:bg-yellow-900'
                    : idx === 1
                    ? 'bg-blue-100 dark:bg-blue-900'
                    : idx === 2
                    ? 'bg-green-100 dark:bg-green-900'
                    : 'bg-pink-100 dark:bg-pink-900'
                }`}
              >
                {category}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Item Table */}
        <table className="w-full text-left mb-6">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">Item</th>
              <th>Price (₹)</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                    className="w-16 border rounded px-2"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Custom Item Input */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <input
            type="text"
            placeholder="Item name"
            value={customItem}
            onChange={(e) => setCustomItem(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />
          <input
            type="number"
            placeholder="Price ₹"
            value={customPrice}
            onChange={(e) => setCustomPrice(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAddCustomItem}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            + Add Custom Item
          </motion.button>
        </div>

        {/* 📅 Pickup & Delivery Scheduler */}
        <div className="mb-6">
          <PickupDeliveryScheduler />
        </div>

        {/* Total Amount */}
        <div className="text-lg font-semibold mb-4 text-center">
          Total Amount: <span className="text-green-600">₹{totalAmount}</span>
        </div>

        {/* Pay Now Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          onClick={handlePayment}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-md transition"
        >
          Pay Now
        </motion.button>
      </motion.div>
    </div>
  );
}
