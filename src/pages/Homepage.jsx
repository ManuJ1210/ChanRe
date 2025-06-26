import { motion } from "framer-motion";
import GroupHighlights from "../components/Highlights";
import HeroSection from "../components/Carousel";
import AboutSection from "../components/aboutSection";
import { FaRegClock, FaVideo, FaCalendarCheck, FaVial } from "react-icons/fa";
import Units from "../components/units";

function Homepage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
      </motion.div>

      <AboutSection />

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-20 ">
        <motion.h2
          className="text-4xl font-extrabold text-center text-blue-900 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>

        <motion.p
          className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Celebrating two-decade legacy of care, innovation & respect in healthcare.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              title: "24×7 Customer Support",
              desc: "Experience expert care anytime, anywhere.",
              gradient: "from-blue-100 to-blue-50",
              icon: <FaRegClock />,
              iconColor: "text-blue-600",
            },
            {
              title: "Live Video Consultations",
              desc: "Connect instantly with specialists.",
              gradient: "from-yellow-100 to-yellow-50",
              icon: <FaVideo />,
              iconColor: "text-yellow-500",
            },
            {
              title: "Appointment Booking",
              desc: "Book appointments easily online.",
              gradient: "from-pink-100 to-pink-50",
              icon: <FaCalendarCheck />,
              iconColor: "text-pink-500",
            },
            {
              title: "Sample Collections",
              desc: "We collect samples at your doorstep.",
              gradient: "from-green-100 to-green-50",
              icon: <FaVial />,
              iconColor: "text-green-500",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-6 md:p-8 shadow-md border border-blue-100 text-center transition hover:shadow-xl`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-3xl mb-4 ${item.iconColor}`}>
                <div className="bg-white p-4 rounded-full shadow-md inline-flex">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Units & Highlights */}
      <Units />
      <GroupHighlights />
    </>
  );
}

export default Homepage;
