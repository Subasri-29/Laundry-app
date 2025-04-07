import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "bg.avif"
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-purple-100/70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-blue-700 drop-shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to Smart Laundry Service 🧺
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-4 text-lg text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Book, Track, and Relax! We’ll take care of your laundry 💧
        </motion.p>

        {/* Animated Washing Machine */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="text-6xl mt-6"
        >
          🌀
        </motion.div>

        {/* 3-Step Process */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span>🚚 Pickup</span>
          <span>→ 🧼 Wash</span>
          <span>→ 🏠 Deliver</span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/booking"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
