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
  FaStethoscope,
  FaArrowRight,
} from "react-icons/fa";
import '../App.css';

const units = [
  { icon: <FaHospitalSymbol className="text-red-500" />, name: "ChanRe RICR", Link:"/chanre-ricr"},
  { icon: <FaMicroscope className="text-purple-500" />, name: "Research Assist", Link:"/research-assist" },
  { icon: <FaBookMedical className="text-blue-500" />, name: "IARET", Link:"/iaret" },
  { icon: <FaFlask className="text-green-500" />, name: "ChanRe Lab", Link:"/chanre-lab" },
  { icon: <FaFileAlt className="text-yellow-500" />, name: "ChanRe Journals", Link:"/chanre-journals" },
  { icon: <FaBook className="text-pink-500" />, name: "ChanRe Publishers", Link:"/chanre-publishers" },
  { icon: <FaLaptopMedical className="text-indigo-500" />, name: "ChanRe Med Soft", Link:"/chanre-medsoft" },
 { icon: <FaStethoscope className="text-teal-500" />, name: "ChanRe Care", Link:"/chanre-care" },
  { icon: <FaBook className="text-orange-500" />, name: "ChanRe Bookshop", Link:"/chanre-bookshop" },
];

const Units = () => {
  return (
    <section className="w-full mt-10 px-6 md:px-20 ">
      <motion.h2
        className="text-4xl font-extrabold text-center text-blue-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Websites
      </motion.h2>

      <motion.p
        className="text-center text-gray-700 mt-4 max-w-xl mx-auto text-base sm:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore our group units that deliver innovation, care, and research across diverse platforms.
      </motion.p>

      
      <div className="w-full mt-14">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit, index) => (
            <Link to={unit.Link}><motion.li
              key={index}
              className="flex items-center justify-between gap-4 border bg-white border-gray-200 rounded-xl px-5 py-4 ease-in-out shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15}}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">{unit.icon}</div>
                <span className="text-gray-800 font-medium text-lg">{unit.name}</span>
              </div>
              <span><Link to={unit.Link}><FaArrowRight className="text-gray-400 bounce-right" /></Link></span>
            </motion.li></Link>
          ))}
        </ul>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/our-units"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
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
