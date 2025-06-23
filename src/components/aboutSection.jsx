import { FaUserNurse, FaHeart, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-blue-400 to-blue-700">
      <div className="max-w-6xl mx-auto">

        <motion.h2
        className="text-4xl font-bold text-center mb-4 text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About us
      </motion.h2>


        <motion.p
          className="text-center text-lg text-white leading-relaxed px-2 sm:px-10 md:px-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          ChanRe Group is a pioneering healthcare institution established in 2002. <br />
          We specialize in Rheumatology, Immunology, and comprehensive Diagnostic Services across India.
        </motion.p>

       
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: <FaUserNurse />,
              title: "Expertise",
              desc: "Experienced staff with compassionate care",
            },
            {
              icon: <FaHeart />,
              title: "Compassion",
              desc: "Holistic patient-centric approach",
            },
            {
              icon: <FaTools />,
              title: "Tech-driven",
              desc: "Cutting-edge diagnostic & AI tools",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg py-8 px-6 text-center hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center text-blue-600 text-5xl mb-4">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
