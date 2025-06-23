import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHospitalSymbol,
  FaMicroscope,
  FaBookMedical,
  FaFlask,
  FaLaptopMedical,
  FaBook,
  FaFileAlt,
  FaGlobe,
} from "react-icons/fa";

const units = [
  { icon: <FaHospitalSymbol className="text-red-500" />, name: "ChanRe RICR" },
  { icon: <FaMicroscope className="text-purple-500" />, name: "Research Assist" },
  { icon: <FaBookMedical className="text-blue-500" />, name: "IARET" },
  { icon: <FaFlask className="text-green-500" />, name: "ChanRe Lab" },
  { icon: <FaFileAlt className="text-yellow-500" />, name: "ChanRe Journals" },
  { icon: <FaBook className="text-pink-500" />, name: "ChanRe Publishers" },
  { icon: <FaLaptopMedical className="text-indigo-500" />, name: "ChanRe Med Soft" },
  { icon: <FaGlobe className="text-teal-500" />, name: "ChanRe Ebook" },
  { icon: <FaBook className="text-orange-500" />, name: "ChanRe Bookshop" },
];

const Units = () => {
  return (
    <section className="w-full mt-5">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Websites
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 mt-4 max-w-xl mx-auto text-base sm:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore our group units that deliver innovation, care, and research across diverse platforms.
      </motion.p>

      <div className="w-full mt-12 px-6 md:px-12 lg:px-20 rounded-2xl">
        <ul className="grid grid-cols-1 p-8 rounded-2xl sm:grid-cols-2 md:grid-cols-3 border border-gray-300 gap-6 bg-white">
          {units.map((unit, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-4 bg-white shadow-sm hover:shadow-md transition rounded-xl px-4 py-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-2xl">{unit.icon}</div>
              <span className="text-gray-800 font-medium text-lg">{unit.name}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/our-units"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Explore Our Units
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Units;
