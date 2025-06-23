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
        <HeroSection/>
      </motion.div>
    <AboutSection />

    <section className="py-16 px-6">
   
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Us
      </motion.h2>

      
      <motion.p
        className="text-center text-gray-600 mt-3 text-base max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Celebrating over two decades of care, innovation, and trust in healthcare.
      </motion.p>

      <div className="mt-12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "24×7 Customer Support",
            desc: "Reach us anytime — we're here to help you.",
            gradient: "from-blue-200 to-blue-100",
            icon: <FaRegClock className="text-blue-600 text-3xl mb-3 mx-auto" />
          },
          {
            title: "Live Video Consultations",
            desc: "Connect with specialists from the comfort of your home.",
            gradient: "from-yellow-200 to-yellow-100",
            icon: <FaVideo className="text-yellow-500 text-3xl mb-3 mx-auto" />
          },
          {
            title: "Appointment Booking",
            desc: "Book your consultation slot with ease online.",
            gradient: "from-pink-200 to-pink-100",
            icon: <FaCalendarCheck className="text-pink-500 text-3xl mb-3 mx-auto" />
          },
          {
            title: "Sample Collections",
            desc: "We collect samples directly from your doorstep.",
            gradient: "from-green-200 to-green-100",
            icon: <FaVial className="text-green-500 text-3xl mb-3 mx-auto" />
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`bg-gradient-to-br ${item.gradient} p-10 rounded-xl shadow-md text-center`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {item.icon}
            <div className="text-lg font-semibold text-gray-800 mb-2">{item.title}</div>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <Units />


      <GroupHighlights />

   
     
    </>
  );
}

export default Homepage;
