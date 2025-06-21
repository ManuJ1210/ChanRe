import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const highlights = [
  { icon: "🎯", label: "Years of Service", end: 21, gradient: "from-pink-200 to-pink-50" },
  { icon: "🏥", label: "Subsidiaries", end: 9, gradient: "from-blue-200 to-blue-50" },
  { icon: "👨‍⚕️", label: "Staff & Specialists", end: 100, gradient: "from-green-200 to-green-50" },
  { icon: "🧬", label: "Patients Served", end: 10000, gradient: "from-yellow-200 to-yellow-50" },
];

const GroupHighlights = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-20 px-6 md:px-20 mt-5">
     
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800">Group Highlights</h2>
        <p className="text-gray-600 mt-2 text-base sm:text-lg">
          Celebrating our legacy of care and innovation
        </p>
      </motion.div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl text-center shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-3">{item.icon}</div>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              {inView && <CountUp end={item.end} duration={1.5} separator="," />}
              {item.label === "Patients Served" && "+"}
            </h3>
            <p className="mt-2 text-base text-gray-700 font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GroupHighlights;
