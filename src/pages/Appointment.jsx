import { FaUser, FaRegClock, FaEnvelope, FaPhoneAlt, FaRegCommentDots, FaCalendarAlt, FaStethoscope, FaVideo, FaCalendarCheck, FaVial } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
const AppointmentPage = () => {
    return (
        <>
            <div className="min-h-screen text-black backdrop-blur-xs ">
                <Helmet>
                    <title>Book Appointment</title>
                </Helmet>
                <section className="py-8 px-6 max-w-7xl mx-auto text-center ">
                    <motion.h2
                        className="text-4xl font-bold text-center text-blue-900"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Book an Appointment
                    </motion.h2>

                    <motion.p
                        className="text-center text-gray-600 mt-4 max-w-xl mx-auto text-base sm:text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Schedule your consultation with ChanRe’s specialists today.
                    </motion.p>

                </section>


                <section className=" text-gray-800 py-16 px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-4">Make an Appointment</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                ChanRe Group is a pioneer in Rheumatology, Immunology, and advanced diagnostics. Our experts provide compassionate, tech-enabled care. Fill in the form to book a consultation today.
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-center gap-2">
                                    <FaRegClock className="text-blue-500" /> 24×7 Customer Support
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaVideo className="text-blue-500" /> Video Consultations
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCalendarCheck className="text-blue-500" /> In-person Appointments
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaVial className="text-blue-500" /> Doorstep Sample Collection
                                </li>
                            </ul>
                            <div className="mt-6 ">
                                <h1 className="text-3xl font-bold">Contact Us</h1>
                                <ul className="space-y-3 text-gray-700 mt-4">
                                    <li className="flex items-center gap-2"><FiPhoneCall className="text-blue-500" />+91 9632533122</li>
                                    <li className="flex items-center gap-2"><FiPhoneCall className="text-blue-500" />+91 8042516699</li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-2xl shadow-xl"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}>
                            <h3 className="text-xl font-bold text-blue-500 mb-6">It’s Quick & Easy</h3>
                            <form className="space-y-4 text-sm">

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center border border-gray-300 rounded px-3">
                                        <FaUser className="text-gray-500 mr-2" />
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="w-full p-2 outline-none bg-transparent"
                                        />
                                    </div>
                                    <div className="flex items-center border border-gray-300 rounded px-3">
                                        <FaUser className="text-gray-500 mr-2" />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="w-full p-2 outline-none bg-transparent"
                                        />
                                    </div>
                                </div>


                                <div className="flex items-center border border-gray-300 rounded px-3">
                                    <FaEnvelope className="text-gray-500 mr-2" />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full p-2 outline-none bg-transparent"
                                    />
                                </div>


                                <div className="flex items-center border border-gray-300 rounded px-3">
                                    <FaPhoneAlt className="text-gray-500 mr-2" />
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="w-full p-2 outline-none bg-transparent"
                                    />
                                </div>

                                <div className="border border-gray-300 rounded px-3 flex items-start">
                                    <FaRegCommentDots className="text-gray-500 mt-3 mr-2" />
                                    <textarea
                                        placeholder="Your Message / Health Concern"
                                        className="w-full p-2 outline-none bg-transparent h-24 resize-none"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center border border-gray-300 rounded px-3">
                                        <FaCalendarAlt className="text-gray-500 mr-2" />
                                        <input type="datetime-local" className="w-full p-2 outline-none bg-transparent" />
                                    </div>
                                    <div className="flex items-center border border-gray-300 rounded px-3">
                                        <FaStethoscope className="text-gray-500 mr-2" />
                                        <select className="w-full p-2 outline-none bg-transparent">
                                            <option>Department</option>
                                            <option>Rheumatology</option>
                                            <option>Immunology</option>
                                            <option>Diagnostics</option>
                                        </select>
                                    </div>
                                </div>


                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                                >
                                    Book Appointment
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default AppointmentPage;
