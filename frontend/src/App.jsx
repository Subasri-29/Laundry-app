import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Tracking from './pages/Tracking';
import Payment from './pages/Payment';
import Reviews from './pages/Reviews';
import OrdersPage from './pages/Orders'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/orders" element={<OrdersPage />} />
          {/* <Route path="/orders/:id" element={<OrderDetails />} /> */}
          {/* Uncomment the above line when OrderDetails component is implemented */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
