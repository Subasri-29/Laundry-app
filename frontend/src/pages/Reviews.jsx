import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, rating, comment, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="bg-white rounded-2xl p-4 shadow-md mb-4"
    >
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex items-center mb-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="text-yellow-500 fill-yellow-500 h-4 w-4 mr-1" />
        ))}
      </div>
      <p className="text-gray-700">{comment}</p>
    </motion.div>
  );
};

export default function Reviews() {
  const [reviews, setReviews] = useState([
    { name: 'Subasri', rating: 5, comment: 'Excellent service! Clothes are fresh and clean ✨' },
    { name: 'Karthik', rating: 4, comment: 'Good service but delivery took some time.' },
    { name: 'Anu', rating: 5, comment: 'Perfect ironing and neatly folded!' },
    { name: 'Siva', rating: 4, comment: 'Washed well but packaging can improve.' },
    { name: 'Deepa', rating: 5, comment: 'So happy! Fast delivery and fresh clothes 🌸' },
    { name: 'Manoj', rating: 3, comment: 'Average service. Hope it gets better.' },
    { name: 'Ayesha', rating: 5, comment: 'Loved the fragrance of washed clothes!' },
    { name: 'Rahul', rating: 4, comment: 'Timely pickup and clean clothes. Satisfied!' },
    { name: 'Preethi', rating: 5, comment: 'Super fast and reliable service 🔥' },
    { name: 'Ganesh', rating: 4, comment: 'Good quality wash but ironing was late.' },
    { name: 'Meena', rating: 5, comment: 'Great overall experience 💯' },
    { name: 'Arjun', rating: 4, comment: 'Clean but need more pickup slots.' }
  ]);

  const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.comment) {
      setReviews([{ ...formData }, ...reviews]);
      setFormData({ name: '', rating: 5, comment: '' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Customer Reviews</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-md mb-6">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 p-2 rounded-md"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-2 flex items-center">
          <label className="mr-2">Rating:</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              type="button"
              key={num}
              onClick={() => setFormData({ ...formData, rating: num })}
              className={`h-5 w-5 mr-1 ${num <= formData.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
            >
              <Star />
            </button>
          ))}
        </div>
        <div className="mb-2">
          <textarea
            placeholder="Write your review..."
            className="w-full border border-gray-300 p-2 rounded-md"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews List */}
      {reviews.map((review, idx) => (
        <ReviewCard
          key={idx}
          name={review.name}
          rating={review.rating}
          comment={review.comment}
          index={idx}
        />
      ))}
    </div>
  );
}
