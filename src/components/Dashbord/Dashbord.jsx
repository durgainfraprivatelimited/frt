// src/Dashboard.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  // Check authentication on component mount
  useEffect(() => {
    checkAuth();
    // Set up periodic auth check every 5 minutes
    const interval = setInterval(checkAuth, 300000);
    return () => clearInterval(interval);
  }, []);

  const checkAuth = () => {
    const isAdminLoggedIn = localStorage.getItem('adminAuth');
    const loginTime = localStorage.getItem('adminLoginTime');
    
    // Check if admin is logged in and session hasn't expired (24 hours)
    if (!isAdminLoggedIn || 
        !loginTime || 
        (new Date().getTime() - parseInt(loginTime)) > 24 * 60 * 60 * 1000) {
      handleLogout();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminLoginTime');
    navigate('/adminlogin');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar with improved styling */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-white shadow-lg transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2
            className={`text-xl font-bold text-blue-600 ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            Admin Panel
          </h2>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          >
            {isSidebarOpen ? "←" : "→"}
          </button>
        </div>

        {isSidebarOpen && (
          <div className="p-4 border-b border-gray-200">
            <img
              src="/image/CEO.jpeg"
              className="w-32 h-32 rounded-full mx-auto shadow-md"
              alt="Admin"
            />
            <p className="text-center mt-2 font-medium">Mr Rangappa</p>
          </div>
        )}

        <nav className="flex-1 overflow-y-auto">
          <ul className="p-2 space-y-1">
            {[
              { path: "/admin", icon: "🏠", label: "Dashboard" },
              { path: "/message", icon: "📩", label: "Messages" },
              { path: "/appointments", icon: "📅", label: "Appointments" },
              { path: "/profile", icon: "👤", label: "Profile" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span className="mr-3">{item.icon}</span>
                  {isSidebarOpen && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center w-full p-3 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
          >
            <span className="mr-3">🚪</span>
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Welcome to Admin Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quick Stats */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">150</p>
                  <p className="text-gray-600">Total Users</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">28</p>
                  <p className="text-gray-600">New Messages</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <span>New user registration</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span>System update completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
