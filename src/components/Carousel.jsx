import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
  
      <motion.div
        className="md:w-1/2 text-center md:text-left max-w-2xl"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug">
          Healthcare built to{" "}
          <span className="text-blue-600">
            <Typewriter
              words={["Serve", "Care", "Innovate", "Heal"]}
              loop={true}
              cursor
              cursorStyle="/"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
          .
        </h1>

        <motion.p
          className="mt-5 text-xl text-gray-700 font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Compassionate care meets clinical excellence.
        </motion.p>

        <motion.p
          className="mt-3 text-base text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          ChanRe Group is a pioneering healthcare institution established in 2002.
          We specialize in Rheumatology, Immunology, and advanced Diagnostic Services across India.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/our-units"><motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Explore Our Units
          </motion.button></Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-100 transition"
          >
            Book Appointment
          </motion.button>
        </motion.div>
      </motion.div>

   
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="images/banner.png"
          alt="ChanRe Mobile App Preview"
          className="w-full max-w-md rounded-2xl"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
