import { FaRegHospital, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  const cardData = [
    {
      icon: <FaRegHospital />,
      title: "ABOUT US",
      text: "ChanRe Group is a pioneering healthcare institution established in 2002. We specialize in Rheumatology, Immunology & Diagnostics.",
      bg: "from-blue-200 to-blue-100",
      iconColor: "text-blue-500"
    },
    {
      icon: <FaPhoneAlt />,
      title: "PHONE",
      text: "+91 96325 33122\n+91 80425 16699",
      bg: "from-green-200 to-green-100",
      iconColor: "text-green-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "LOCATION",
      text: "414/65 20th Main, Chord Rd,\n1st Block, Rajajinagar, Bengaluru, Karnataka 560010\nFax: (222) 531-8999",
      bg: "from-pink-200 to-pink-100",
      iconColor: "text-pink-500"
    },
  ];

  return (
    <div className=" text-gray-800">
     <h1 className="text-5xl font-bold text-center mt-8">Contact Us</h1>
     <p className="text-center text-gray-600 mt-4">We'd love to hear from you!</p>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-300 to-blue-200 rounded-3xl shadow-lg p-10 border border-blue-100">
            <motion.h2
              className="text-4xl font-bold mb-4 text-blue-800"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We're here to assist you. Drop us a message and we'll respond promptly.
            </motion.p>

            <motion.form
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {["Full Name", "Email", "Phone Number", "Subject"].map((placeholder, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={placeholder}
                  className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition bg-white/80"
                />
              ))}
              <textarea
                rows="5"
                placeholder="Your Message"
                className="p-4 md:col-span-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition bg-white/80"
              ></textarea>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-semibold shadow-md hover:from-blue-700 hover:to-blue-600 transition"
                >
                  SEND MESSAGE
                </button>
              </div>
            </motion.form>
          </div>

          
          <motion.div
            className="w-full rounded-3xl overflow-hidden shadow-lg border border-blue-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <iframe
              title="ChanRe Group Location"
              className="w-full h-[565px] rounded-3xl border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4758.603405293559!2d77.54840370788675!3d12.998830981009647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dbc8be6ee1f%3A0x99d77f3579e9ed2e!2sChanRe%20Rheumatology%20And%20Immunology%20Center%20And%20Research!5e0!3m2!1sen!2sin!4v1750920618538!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {cardData.map((item, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl bg-gradient-to-br ${item.bg} shadow-lg hover:shadow-xl border border-blue-100`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div className={`bg-white ${item.iconColor} p-4 rounded-full text-3xl shadow`}>
                  {item.icon}
                </div>
              </div>
              <h4 className="font-bold text-blue-900 text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-gray-700 whitespace-pre-line">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
