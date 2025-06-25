import { FaRegHospital, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <div className=" text-gray-800">

            <section className="py-16 px-6 text-center">
                <motion.h2 className="text-4xl font-bold mb-2 "
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>Contact Us</motion.h2>

                <motion.p className="text-gray-600 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}>
                    Any questions or remarks? Just write us a message!
                </motion.p>


                <motion.form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}   >
                    <input
                        type="email"
                        placeholder="Enter a valid email address"
                        className="p-3 rounded-lg border border-gray-500 focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        className="p-3 rounded-lg border border-gray-500  focus:outline-none"
                    />
                    <div className="md:col-span-2">
                    <textarea className="w-full border p-3 rounded-lg border-gray-500  focus:outline-none  " placeholder="Message"></textarea></div>
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                        >
                            SUBMIT
                        </button>
                    </div>
                </motion.form>
            </section>


            <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-10 px-6 border-t align-middle border-gray-300 mx-auto">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 , duration: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}>
                        <div className="flex justify-center mb-3">
                            <div className="bg-white text-blue-600 p-4 rounded-full text-2xl">
                                <FaRegHospital />
                            </div>
                        </div>
                        <h4 className="font-bold text-white  mb-1">ABOUT US</h4>
                        <p className="text-sm text-white "> ChanRe Group is a pioneering healthcare institution established in 2002. <br />
                            We specialize in Rheumatology, Immunology, and comprehensive Diagnostic Services across India.</p>

                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 , duration: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }} >
                        <div className="flex justify-center mb-3">
                            <div className="bg-white text-blue-600 p-4 rounded-full text-2xl">
                                <FaPhoneAlt />
                            </div>
                        </div>
                        <h4 className="font-bold text-white  mb-1">PHONE </h4>
                        <p className="text-sm text-white ">+91 9632533122</p>
                        <p className="text-sm text-white ">+91 8042516699</p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 , duration: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}>
                        <div className="flex justify-center mb-3">
                            <div className="bg-white text-blue-600 p-4 rounded-full text-2xl">
                                <FaMapMarkerAlt />
                            </div>
                        </div>
                        <h4 className="font-bold text-white mb-1">OUR OFFICE LOCATION</h4>
                        <p className="text-sm text-white">414/65 20th main, Chord Rd, 1st Block, Rajajinagar, Bengaluru, Karnataka 560010</p>
                        <p className="text-sm text-white">Fax: (222) 531-8999</p>
                    </motion.div>
                </div>
                
            </section>
          </div>

    );
};

export default ContactPage;
