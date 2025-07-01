import  { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Alice Johnson",
    feedback:
      "Absolutely love the service! The process was smooth, the team was responsive, and I got exactly what I was looking for. I've recommended this to my friends and colleagues and will definitely use it again in the future. Great job!",
    rating: 5,
    date: "2025-06-10",
  },
  {
    name: "Bob Smith",
    feedback:
      "The overall experience was good. I had a minor issue initially, but the support team resolved it quickly. It's rare to see such dedication these days. The UI is intuitive and easy to use.",
    rating: 4,
    date: "2025-06-12",
  },
  {
    name: "Charlie Evans",
    feedback:
      "The platform works, but I expected more advanced features. It’s decent for beginners, but if you're looking for high customization, it might fall short. Still, the support team is excellent and helpful.",
    rating: 3,
    date: "2025-06-15",
  },
  {
    name: "Diana Foster",
    feedback:
      "Exceptional service from start to finish. The layout is modern, and it feels premium. They handled everything professionally and were always available for questions. Super happy!",
    rating: 5,
    date: "2025-06-18",
  },
  {
    name: "Evan Patel",
    feedback:
      "Great experience overall. The onboarding was simple, and the performance is great. I faced no bugs or issues during my time using it. Worth every penny. I'd recommend it without hesitation.",
    rating: 4,
    date: "2025-06-20",
  },
  {
    name: "Evan Patel",
    feedback:
      "Great experience overall. The onboarding was simple, and the performance is great. I faced no bugs or issues during my time using it. Worth every penny. I'd recommend it without hesitation.",
    rating: 4,
    date: "2025-06-20",
  },
  
];

const ReviewSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  const next = () => {
    setStartIndex((prev) =>
      prev + visibleCount < reviews.length ? prev + visibleCount : 0
    );
  };

  const prev = () => {
    setStartIndex((prev) => (prev - visibleCount >= 0 ? prev - visibleCount : 0));
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="w-full flex flex-col items-center py-12 px-4 ">
      
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-2 text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Customers Say
      </motion.h2>

      <motion.p
        className="text-center text-gray-700 mt-4 max-w-xl mx-auto text-base sm:text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Real feedback from clients who have experienced our product and service firsthand.
      </motion.p>

      
      <div className="relative w-full max-w-7xl mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
          {visibleReviews.map((review, index) => (
            <motion.div
              key={index}
              className="min-h-[300px] p-6 shadow-xl rounded-2xl border border-gray-100 hover:shadow-2xl transition duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <div>
                <div className="flex items-center mb-3 ">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    ))}
                </div>
                <p className="text-gray-700 leading-relaxed line-clamp-6">
                  “{review.feedback}”
                </p>
              </div>
              <div className="text-sm text-gray-500 mt">
                — <span className="font-medium text-gray-700">{review.name}</span>,{" "}
                {new Date(review.date).toDateString()}
              </div>
            </motion.div>
          ))}
        </div>

     
        <div className="absolute bottom-[-4.5rem] right-0 flex gap-3 p-4 ">
          <button
            onClick={prev}
            className="p-2 bg-blue-600 border text-white border-gray-300 hover:bg-blue-800  rounded-full shadow"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-2 bg-blue-600 border text-white border-gray-300 hover:bg-blue-800 rounded-full shadow"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
