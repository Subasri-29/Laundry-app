import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/orders');
      setOrders(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setLoading(false);
    }
  };

  const markAsDelivered = async (id) => {
    try {
      setUpdatingId(id);
      await axios.put(`http://localhost:5000/api/orders/${id}/status`, {
        status: 'Delivered',
      });
      fetchOrders(); // Refresh after update
    } catch (err) {
      console.error('Error updating status:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading orders...</div>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        All Laundry Orders 🧺
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Clothes</th>
                <th className="px-4 py-2">Pickup Time</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{order.name}</td>
                  <td className="px-4 py-2">{order.phone}</td>
                  <td className="px-4 py-2">{order.address}</td>
                  <td className="px-4 py-2 text-center">{order.clothCount}</td>
                  <td className="px-4 py-2">{order.pickupTime}</td>
                  <td className="px-4 py-2 font-semibold">{order.status}</td>
                  <td className="px-4 py-2">
                    {order.status !== 'Delivered' ? (
                      <button
                        onClick={() => markAsDelivered(order._id)}
                        disabled={updatingId === order._id}
                        className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 disabled:opacity-50"
                      >
                        {updatingId === order._id ? 'Updating...' : 'Mark as Delivered'}
                      </button>
                    ) : (
                      <span className="text-green-600 font-medium">Delivered ✅</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
