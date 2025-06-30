import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBriefcase, FaFolder, FaEnvelope, FaBlog } from "react-icons/fa";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const activeLink = "flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md border-b-4 border-blue-700";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1184);
      if (window.innerWidth >= 1184) setNavOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeMobileMenu = () => {
    if (isMobile) setNavOpen(false);
  };

  const navItems = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/our-units", label: "Our Units", icon: <FaBriefcase /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
     { to: "/about", label: "About", icon: <FaInfoCircle /> },

  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white border-b border-blue-100 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20 rounded-md px-3 py-2 font-medium transition-all duration-200 ease-in-out">
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2">
            <img className="h-12 w-auto" src="/images/logo.png" alt="ChanRe Logo" />
          </Link>

          
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : "flex items-center gap-2 text-gray-800 font-medium px-2 py-2 hover:text-white hover:bg-blue-500 rounded transition duration-300"
                }
              >
                {icon} {label}
              </NavLink>
            ))}
          </div>

        
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none transition"
            >
              {navOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      
      {navOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-md border-t border-blue-100 px-6 py-4 space-y-2 rounded-b-xl">
          {navItems.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMobileMenu}
              className="flex items-center gap-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded transition"
            >
              {icon} {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Header;
