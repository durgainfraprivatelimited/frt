// src/Dashboard.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Appointments = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sortOrder, setSortOrder] = useState('date');
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchAppointments();
    const interval = setInterval(checkAuth, 300000);
    return () => clearInterval(interval);
  }, [sortOrder]);

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

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('https://backend-b84z.onrender.com/api/admin/appointments');
      let sortedAppointments = response.data.data;

      if (sortOrder === 'date') {
        sortedAppointments = sortedAppointments.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (sortOrder === 'name') {
        sortedAppointments = sortedAppointments.sort((a, b) => a.name.localeCompare(b.name));
      }

      setAppointments(sortedAppointments);
    } catch (err) {
      setError('Failed to fetch appointments');
      console.error('Fetch appointments error:', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteAppointment = async (appointmentId) => {
    try {
      await axios.delete(`https://backend-b84z.onrender.com/api/admin/appointments/${appointmentId}`);
      fetchAppointments();
    } catch (err) {
      setError('Failed to delete appointment');
      console.error('Delete appointment error:', err);
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

      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Appointments</h1>

          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <div className="mb-4 flex justify-end">
            <label className="mr-2 font-medium">Sort by:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded-lg px-2 py-1"
            >
              <option value="date">Date</option>
              <option value="name">Name</option>
            </select>
          </div>

          {loading ? (
            <div className="text-center">Loading appointments...</div>
          ) : (
            <div className="grid gap-6">
              {appointments.map((appointment) => (
                <div key={appointment._id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <img
                        src={appointment.userId?.profilePhoto?.url || '/image/profile.png'}
                        alt="Profile"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">
                          {appointment.name}
                        </h3>
                        <p className="text-gray-600">{appointment.email}</p>
                        <p className="text-gray-600">{appointment.phone}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteAppointment(appointment._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold">Date:</h4>
                    <p>{new Date(appointment.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Time:</h4>
                    <p className="text-gray-700">{appointment.time}</p>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    Scheduled: {new Date(appointment.createdAt).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Appointments;
