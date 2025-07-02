import { motion } from "framer-motion";
import { Link } from "react-router";
const ChanReRICR = () => {
  return (

    <>
      <section className="min-h-screen px-6 py-20 md:px-20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <motion.h1 className="text-4xl font-bold text-blue-800 text-center mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>About ChanRe Med Soft</motion.h1>

          <motion.p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}>
            Web Application, Android Application and Digital marketing Services
          </motion.p>

          <div className="rounded-3xl shadow-lg p-8 md:p-12 space-y-6 backdrop-blur-sm border border-blue-100">

            <motion.div className="space-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              <h2 className="text-2xl font-semibold text-blue-700">Our Story</h2>
              <p className="text-gray-800 text-base">

                ChanRe Medsoft is a Medical software provider company, dedicated to enable smarter care in the healthcare industry from past 25+ years. We take pride in designing leading- edge healthcare information technology solutions for healthcare organizations of every size. Focused on value-based care, we create comprehensive, integrated platforms to improve the way practitioners work by offering a wide variety of medical software’s to integrate according to their specifications.
              </p>
            </motion.div>

            <motion.div className="space-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              <h2 className="text-2xl font-semibold text-blue-700">Our Services</h2>
              <p className="text-gray-800 text-base">

                <ul className="list-disc pl-6 space-y-2">
                  <li>Website Development</li>
                  <li>Android Application Development</li>
                  <li>IOS Application Development</li>
                  <li>Hospital Software</li>
                  <li>AI Based Software</li>
                  <li>SEO</li>
                  <li>SEM</li>
                  <li>Google Ads</li>
                  <li>Facebook Ads</li>
                  <li>Social Bookmarking</li>
                </ul>
              </p>
            </motion.div>

            <motion.div className="space-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              <h2 className="text-2xl font-semibold text-blue-700">Our Vision</h2>
              <p className="text-gray-800 text-base">
                Our vision is to be a leader in the field of healthcare software solutions, providing innovative and reliable services that empower healthcare providers to deliver exceptional patient care. We aim to foster a culture of excellence, integrity, and continuous improvement in everything we do.
              </p>
            </motion.div>
          </div>

          <motion.div className="text-center mt-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <Link to="https://chanremedsoft.com"><button className="px-6 py-3 bg-blue-700 text-white rounded-full shadow-md cursor-pointer hover:bg-blue-800 transition">
              Visit Our Main Website
            </button></Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ChanReRICR;
