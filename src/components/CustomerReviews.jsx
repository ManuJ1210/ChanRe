import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "DB",
    date: "January 28th, 2025",
    feedback:
      "We paid top dollar for a domain we had been waiting to obtain for a while, Atom made the payment and transfer painless and swift. Even with the delay of waiting over the weekend for our funds to transfer. Tech support is pretty swift to answer any emails as well. Accepting the final transfer was a b ...",
  },
  {
    name: "customer",
    date: "May 13th, 2025",
    feedback:
      "Friendly and professional. Support always quickly responded when I had a question. The company did a fantastic job handling a sale and listened to me when I had feedback. I trust doing business with Atom.",
  },
  {
    name: "oluwaseun ebhohon",
    date: "May 7th, 2025",
    feedback:
      "Very reliable platform as always. Atom keeps blowing my mind away. Sold a name and the transaction went very smoothly. I got paid in less than 30 minutes of payout request",
  },
  {
    name: "new user",
    date: "May 1st, 2025",
    feedback:
      "Excellent experience. Seamless platform and trustworthy. I’ll definitely use Atom again in the future.",
  },
];

const TestimonialCard = ({ feedback, name, date }) => (
  <div className="border p-6 rounded-md w-full md:w-1/3 flex-shrink-0 bg-white">
    <div className="flex items-center gap-1 mb-4 text-yellow-500">
      {Array(5)
        .fill()
        .map((_, i) => (
          <FaStar key={i} />
        ))}
    </div>
    <p className="text-gray-800 text-sm mb-6 line-clamp-6">{feedback}</p>
    <p className="font-semibold text-sm text-gray-900">{name}</p>
    <p className="text-sm text-gray-500 mt-1">{date}</p>
  </div>
);

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const perPage = 3;

  const next = () => setIndex((prev) => (prev + perPage) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - perPage + testimonials.length) % testimonials.length);

  const visible = Array.from({ length: perPage }, (_, i) => testimonials[(index + i) % testimonials.length]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 mt-10 ">
      <h2 className=" text-4xl font-extrabold text-center mt-8 text-blue-800 ">What Our Customers Say</h2>
        <p className="text-center text-gray-700 mt-4 max-w-xl mx-auto text-base sm:text-lg">Hear from our satisfied customers about their experiences with our services.</p>

      <div className="flex flex-col md:flex-row gap-6 mx-auto h-80 mt-10 ">
        {visible.map((t, i) => (
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
