import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const highlights = [
  { icon: "🎯", label: "Years of Service", end: 21, bg: "from-pink-300 to-pink-200" },
  { icon: "🏥", label: "Subsidiaries", end: 9, bg: "from-blue-300 to-blue-200" },
  { icon: "👨‍⚕️", label: "Staff & Specialists", end: 100, bg: "from-green-300 to-green-200" },
  { icon: "🧬", label: "Patients Served", end: 10000, bg: "from-yellow-300 to-yellow-200" },
];

const GroupHighlights = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="mx-auto  mb-10 mt-20 px-6  backdrop-blur-sm bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 shadow-xl p-20 md:p-16 text-white"
    >
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-white">Group Highlights</h2>
        <p className="text-white mt-2 text-lg font-light">
          Celebrating our legacy of care and innovation
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className={`w-80 bg-gradient-to-br ${item.bg} rounded-3xl p-8 text-center drop-shadow-green-50 hover:shadow-2xl transition transform hover:scale-105`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-4xl font-bold text-blue-900">
              {inView && <CountUp end={item.end} duration={1.5} separator="," />}
              {item.label === "Patients Served" && "+"}
            </h3>
            <p className="mt-2 text-base text-gray-800 font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GroupHighlights;
