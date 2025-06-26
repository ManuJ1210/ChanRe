import { FaUserNurse, FaHeart, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className=" px-6 md:px-10  ">
      <div className=" mx-auto rounded-[32px] bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 shadow-xl p-10 md:p-16 text-white">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-center mb-6 text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-center text-lg leading-relaxed max-w-3xl mx-auto text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          ChanRe Group is a pioneering healthcare institution established in 2002. <br />
          We specialize in Rheumatology, Immunology, and comprehensive Diagnostic Services across India.
        </motion.p>

        {/* Features */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUserNurse />,
              title: "Expertise",
              desc: "Experienced staff delivering compassionate care.",
            
              iconColor: "text-blue-600",
            },
            {
              icon: <FaHeart />,
              title: "Compassion",
              desc: "Holistic and patient-centric approach.",
              
              iconColor: "text-pink-600",
            },
            {
              icon: <FaTools />,
              title: "Tech-driven",
              desc: "Cutting-edge diagnostics & AI-powered tools.",
              iconColor: "text-purple-600",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`bg-white/90 rounded-2xl p-8 text-center border border-white/30 shadow-md hover:shadow-xl transition`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                <div className={`bg-gray-300 p-4 rounded-full shadow text-3xl ${item.iconColor}`}>
                  {item.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
