import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
   <footer className="footer sm:footer-horizontal font-semibold bg-gray-800 text-lg p-10 text-white ">
  <aside>
    <img src="/images/logo.png" alt="" />
     <h6 className="footer-title mt-3">Newsletter</h6>
    <fieldset className="w-80">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item focus:outline-none bg-gray-500" />
        <button className="btn bg-blue-600 text-white border-none shadow-none join-item">Subscribe</button>
      </div>
    </fieldset>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">ChanRe RICR</a>
    <a className="link link-hover">Research Assist</a>
    <a className="link link-hover">ChanRe Med Soft</a>
    <a className="link link-hover">ChanRe Care</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

    
      <div className="text-center text-md font-semibold text-white h-15 content-center bg-gray-900 ">
        © {new Date().getFullYear()} ChanRe Group. All rights reserved.
      </div>
      </>
    
  );
}

export default Footer;
