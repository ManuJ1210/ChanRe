import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const activeLink =
    "text-blue-700 font-semibold border-b-2 border-blue-500 transition";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1184);
      if (window.innerWidth >= 1184) {
        setNavOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = () => setNavOpen((prev) => !prev);

  const closeMobileMenu = () => {
    if (isMobile) setNavOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white border-b border-blue-100 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
       
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2">
            <img className="h-12 w-auto" src="/images/logo.png" alt="ChanRe Logo" />
          </Link>

        
          <div className="hidden md:flex space-x-10 items-center">
            {[
              { to: "/", label: "Home" },
              { to: "/our-units", label: "Our Units" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : "text-gray-800 font-medium hover:text-blue-600 hover:drop-shadow transition duration-300"
                }
              >
                {label}
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
          {[
            { to: "/", label: "Home" },
            { to: "/our-units", label: "Our Units" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact Us" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMobileMenu}
              className="block text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded transition"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Header;
