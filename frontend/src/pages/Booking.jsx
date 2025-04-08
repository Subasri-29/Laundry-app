import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    landmark: '',
    clothCount: '',
    pickupTime: '',
    instructions: '',
    services: {
      washing: false,
      drying: false,
      ironing: false,
    },
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.services) {
      setFormData((prev) => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    // ✅ Convert services object to array of selected services
    const selectedServices = Object.entries(formData.services)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    const payload = {
      ...formData,
      services: selectedServices,
      clothCount: parseInt(formData.clothCount),
    };

    try {
      const response = await axios.post('http://localhost:5000/api/orders', payload);
      console.log('Order response:', response.data);
      setStatusMessage('✅ Laundry Pickup Booked Successfully!');
      setFormData({
        name: '',
        phone: '',
        address: '',
        landmark: '',
        clothCount: '',
        pickupTime: '',
        instructions: '',
        services: {
          washing: false,
          drying: false,
          ironing: false,
        },
      });
    } catch (error) {
      console.error('Order error:', error);
      setStatusMessage('❌ Booking Failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-blue-600 mb-6 text-center"
      >
        Book a Laundry Pickup
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: 'name', placeholder: 'Your Name', type: 'text' },
          { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
          { name: 'address', placeholder: 'Pickup Address', type: 'text' },
          { name: 'landmark', placeholder: 'Landmark', type: 'text' },
          { name: 'clothCount', placeholder: 'How many clothes?', type: 'number', min: 1 },
        ].map((field, idx) => (
          <motion.input
            key={field.name}
            type={field.type}
            name={field.name}
            min={field.min}
            placeholder={field.placeholder}
            className="w-full p-3 border rounded-md"
            value={formData[field.name]}
            onChange={handleChange}
            required
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx }}
          />
        ))}

        <motion.div
          className="border rounded-md p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <label className="block text-gray-700 font-semibold mb-2">Select Services:</label>
          <div className="space-y-2">
            {[
              { key: 'washing', label: 'Washing 🧼' },
              { key: 'drying', label: 'Drying 🌬' },
              { key: 'ironing', label: 'Ironing 👕' },
            ].map((service) => (
              <label key={service.key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={service.key}
                  checked={formData.services[service.key]}
                  onChange={handleChange}
                />
                <span>{service.label}</span>
              </label>
            ))}
          </div>
        </motion.div>

        <motion.input
          type="time"
          name="pickupTime"
          className="w-full p-3 border rounded-md"
          value={formData.pickupTime}
          onChange={handleChange}
          required
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        />

        <motion.textarea
          name="instructions"
          placeholder="Special Instructions (optional)"
          className="w-full p-3 border rounded-md"
          rows={3}
          value={formData.instructions}
          onChange={handleChange}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        ></motion.textarea>

        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 disabled:opacity-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
        >
          {loading ? 'Booking...' : 'Book Now'}
        </motion.button>
      </form>

      {statusMessage && (
        <div className="mt-4 text-center font-semibold text-green-600">{statusMessage}</div>
      )}
    </motion.div>
  );
}
