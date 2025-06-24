import { FaRegHospital , FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-white text-gray-800">
      
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-10">
          Any questions or remarks? Just write us a message!
        </p>

        
        <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Enter a valid email address"
            className="p-3 rounded-full border border-gray-300 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Enter your Name"
            className="p-3 rounded-full border border-gray-300 focus:outline-none"
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </section>

     
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-10 px-6 border-t align-middle border-gray-300 h-80">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
      
          <div>
            <div className="flex justify-center mb-3">
              <div className="bg-white text-blue-600 p-4 rounded-full text-2xl">
                <FaRegHospital  />
              </div>
            </div>
            <h4 className="font-bold text-white  mb-1">ABOUT US</h4>
            <p className="text-sm text-white "> ChanRe Group is a pioneering healthcare institution established in 2002. <br />
          We specialize in Rheumatology, Immunology, and comprehensive Diagnostic Services across India.</p>
          
            </div>
 
          <div>
            <div className="flex justify-center mb-3">
              <div className="bg-white text-blue-600 p-4 rounded-full text-2xl">
                <FaPhoneAlt />
              </div>
            </div>
            <h4 className="font-bold text-white  mb-1">PHONE </h4>
            <p className="text-sm text-white ">+91 9632533122</p>
            <p className="text-sm text-white ">+91 8042516699</p>
          </div>

          <div>
            <div className="flex justify-center mb-3">
              <div className="bg-white text-blue-600 p-4 rounded-full text-2xl">
                <FaMapMarkerAlt />
              </div>
            </div>
            <h4 className="font-bold text-white mb-1">OUR OFFICE LOCATION</h4>
            <p className="text-sm text-white">414/65 20th main, Chord Rd, 1st Block, Rajajinagar, Bengaluru, Karnataka 560010</p>
            <p className="text-sm text-white">Fax: (222) 531-8999</p>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default ContactPage;
