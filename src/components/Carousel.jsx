import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section className="relative w-full py-28 px-6 md:px-20 overflow-hidden backdrop-blur-sm  mb-25">

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-14">
        
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-6xl font-extrabold text-gray-700 leading-tight mb-4 drop-shadow-sm">
            Healthcare built to <br />{" "}
            <span className="text-blue-600">
              <Typewriter
                words={["Serve", "Care", "Innovate", "Heal"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
            .
          </h1>

          <motion.p
            className="text-xl text-gray-800 font-medium mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Compassionate care meets clinical excellence.
          </motion.p>

          <motion.p
            className="text-base text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            ChanRe Group is a pioneering healthcare institution established in 2002,
            specializing in Rheumatology and Immunology across India.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/our-units">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
              >
                Explore Our Units
              </motion.button>
            </Link>
            <Link to="/appointment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl backdrop-blur-md bg-white/60 hover:bg-blue-100 transition"
              >
                Book Appointment
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

       
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          
        >
          <motion.img
            src="images/banner.png"
            alt="ChanRe Logo"
            className="w-72 md:w-96 "
            animate={{ x: [0, 100, 0] }}
          />
        </motion.div>
      </div>

    
    </section>
  );
};

export default HeroSection;
