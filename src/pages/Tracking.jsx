import { useState } from 'react';

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
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-purple-600 text-center mb-6">
        Track Your Laundry Status 📍
      </h2>
      <input
        type="text"
        placeholder="Enter Order ID or Phone Number"
        className="w-full p-3 border rounded-md mb-4"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button
        onClick={handleTrack}
        className="w-full bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700"
      >
        Check Status
      </button>

      {status && (
        <div className="mt-6 text-center">
          <p className="text-lg font-medium text-gray-700">Current Status:</p>
          <p className="mt-2 text-2xl font-bold text-purple-800">{status}</p>
        </div>
      )}
    </div>
  );
}
