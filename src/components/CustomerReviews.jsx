import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "DB",
    date: "January 28th, 2025",
    feedback:
      "We paid top dollar for a domain we had been waiting to obtain for a while, Atom made the payment and transfer painless and swift...",
  },
  {
    name: "Customer",
    date: "May 13th, 2025",
    feedback:
      "Friendly and professional. Support always quickly responded when I had a question. The company did a fantastic job handling a sale...",
  },
  {
    name: "Oluwaseun Ebhohon",
    date: "May 7th, 2025",
    feedback:
      "Very reliable platform as always. Atom keeps blowing my mind away. Sold a name and the transaction went very smoothly...",
  },
  {
    name: "New User",
    date: "May 1st, 2025",
    feedback:
      "Excellent experience. Seamless platform and trustworthy. I’ll definitely use Atom again in the future.",
  },
  {
    name: "Ravi Kumar",
    date: "April 24th, 2025",
    feedback:
      "Smooth transaction and excellent communication throughout the process.",
  },
  {
    name: "Ananya Sharma",
    date: "April 10th, 2025",
    feedback:
      "Fast service, transparent and reliable platform. Definitely recommend.",
  },
];

const TestimonialCard = ({ feedback, name, date }) => (
  <div className="border p-6 rounded-md shadow-md w-full h-full flex flex-col justify-between ">
    <div>
      <div className="flex items-center gap-1 mb-4 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="text-gray-800 text-sm mb-6 line-clamp-6">{feedback}</p>
    </div>
    <div>
      <p className="font-semibold text-sm text-gray-900">{name}</p>
      <p className="text-sm text-gray-500 mt-1">{date}</p>
    </div>
  </div>
);

const TestimonialSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const perPage = 4;

  const next = () =>
    setStartIndex((prev) => (prev + perPage) % testimonials.length);
  const prev = () =>
    setStartIndex(
      (prev) => (prev - perPage + testimonials.length) % testimonials.length
    );

  const visibleTestimonials = testimonials
    .slice(startIndex, startIndex + perPage)
    .concat(
      testimonials.slice(0, Math.max(0, startIndex + perPage - testimonials.length))
    );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 mt-10 mb-8 ">
      <h2 className="text-4xl font-extrabold text-center text-blue-800">
        What Our Customers Say
      </h2>
      <p className="text-center text-gray-700 mt-4 max-w-xl mx-auto text-base sm:text-lg">
        Hear from our satisfied customers about their experiences with our services.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
        {visibleTestimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>

      <div className="flex justify-end mt-6 pr-2 gap-2">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border bg-white border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border bg-white border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
