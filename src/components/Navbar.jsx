// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status when component mounts and when it updates
    const checkAuth = () => {
      const auth = localStorage.getItem('userAuth');
      setIsLoggedIn(!!auth);
    };
    
    checkAuth();
    // Add event listener for storage changes
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userAuth');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('userPicture');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div>
      <nav className="top-0 left-0 right-0 z-50 bg-blue-500 backdrop-blur-sm shadow-md p-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/image/logo.jpg" alt="Logo" className="h-10 mr-3 rounded-full" />
            <div className="text-xl font-bold text-white">Durga Infra Private Limited</div>
          </div>
          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex space-x-6 text-white">
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
            <li><Link to="/service" className="hover:text-gray-200">Service</Link></li>
            <li><Link to="/albumb" className="hover:text-gray-200">Album</Link></li>
            <li><Link to="/contact" className="hover:text-gray-200">Contact Us</Link></li>
            <li>
              {isLoggedIn ? (
                <button 
                  onClick={handleLogout}
                  className="hover:text-gray-200 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="hover:text-gray-200">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden flex flex-col space-y-4 mt-4 text-white">
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
            <li><Link to="/service" className="hover:text-gray-200">Service</Link></li>
            <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
            <li>
              {isLoggedIn ? (
                <button 
                  onClick={handleLogout}
                  className="hover:text-gray-200 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="hover:text-gray-200">
                  Login
                </Link>
              )}
            </li>
          </ul>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
