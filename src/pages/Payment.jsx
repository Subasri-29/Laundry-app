import { useState } from 'react';

export default function Payment() {
  const [items, setItems] = useState([
    { name: 'Shirt', price: 30, quantity: 0 },
    { name: 'Pants', price: 40, quantity: 0 },
    { name: 'Bedsheet', price: 60, quantity: 0 },
    { name: 'Towel', price: 20, quantity: 0 },
  ]);

  const handleQuantityChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = parseInt(value) || 0;
    setItems(updatedItems);
  };

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePayment = () => {
    if (totalAmount === 0) {
      alert('Please select items before payment.');
    } else {
      alert(`Payment of ₹${totalAmount} successful!`);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Laundry Cost Estimation 💰</h2>
      <table className="w-full text-left mb-6">
        <thead>
          <tr className="text-gray-600">
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

      <div className="text-lg font-semibold mb-4 text-center">
        Total Amount: <span className="text-green-600">₹{totalAmount}</span>
      </div>

      <button
        onClick={handlePayment}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-md"
      >
        Pay Now
      </button>
    </div>
  );
}
