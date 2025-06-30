import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
    <footer className=" text-white py-16  px-6 md:px-20 bg-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
 
        <div>
          <h6 className="text-lg font-semibold text-white mb-4">Important Links</h6>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 transition">ChanRe RICR</li>
            <li className="hover:text-blue-600 transition">Research Assist</li>
            <li className="hover:text-blue-600 transition">IARET</li>
            <li className="hover:text-blue-600 transition">ChanRe Journals</li>
              <li className="hover:text-blue-600 transition">ChanRe Publishers</li>
          </ul>
        </div>


        <div>
          <h6 className="text-lg font-semibold text-white mb-4">Company</h6>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 transition">About Us</li>
            <li className="hover:text-blue-600 transition">Contact</li>
            <li className="hover:text-blue-600 transition">Careers</li>
            <li className="hover:text-blue-600 transition">Press Kit</li>
          </ul>
        </div>

  
        <div>
          <h6 className="text-lg font-semibold text-white mb-4">Follow Us</h6>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition">
              <FaFacebookF size={22} />
            </a>
            <a href="#" className="hover:text-sky-500 transition">
              <FaTwitter size={22} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>
      </footer>

    
      <div className="text-center text-md font-semibold text-white h-15 content-center bg-gray-900 ">
        © {new Date().getFullYear()} ChanRe Group. All rights reserved.
      </div>
      </>
    
  );
}

export default Footer;
