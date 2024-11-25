// src/Dashboard.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    const interval = setInterval(checkAuth, 300000);
    fetchUsers();
    return () => clearInterval(interval);
  }, []);

  const checkAuth = () => {
    const isAdminLoggedIn = localStorage.getItem('adminAuth');
    const loginTime = localStorage.getItem('adminLoginTime');
    
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

  const fetchUsers = async () => {
    try {
      console.log('Fetching users...');
      const response = await axios.get('https://backend-b84z.onrender.com/api/admin/users');
      console.log('Users fetched:', response.data.data);
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`https://backend-b84z.onrender.com/api/admin/users/${userId}`);
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className={`${isSidebarOpen ? "w-64" : "w-16"} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className={`text-xl font-bold text-blue-600 ${isSidebarOpen ? "block" : "hidden"}`}>
            Admin Panel
          </h2>
          <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
            {isSidebarOpen ? "←" : "→"}
          </button>
        </div>

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

      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Users</h1>
          </div>
          
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td className="py-2">{user.firstName} {user.lastName}</td>
                  <td className="py-2">{user.email}</td>
                  <td className="py-2">
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Profile;
