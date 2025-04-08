import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">SmartLaundry</Link>
        <div className="flex space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/booking" className="hover:text-yellow-300">Booking</Link>
          <Link to="/tracking" className="hover:text-yellow-300">Tracking</Link>
          <Link to="/orders" className="hover:text-yellow-300">Orders</Link>
          <Link to="/payment" className="hover:text-yellow-300">Payment</Link>
          <Link to="/reviews" className="hover:text-yellow-300">Reviews</Link>
        </div>
      </div>
    </nav>
  );
}
