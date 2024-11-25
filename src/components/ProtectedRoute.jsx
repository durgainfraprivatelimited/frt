import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem('adminAuth');
  const loginTime = localStorage.getItem('adminLoginTime');
  
  // Check if admin is logged in and session hasn't expired (24 hours)
  if (!isAdminLoggedIn || 
      !loginTime || 
      (new Date().getTime() - parseInt(loginTime)) > 24 * 60 * 60 * 1000) {
    return <Navigate to="/adminlogin" />;
  }

  return children;
};

export default ProtectedRoute; 