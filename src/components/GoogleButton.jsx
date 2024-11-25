import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleButton = ({ onSuccess, onError }) => {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => onSuccess(tokenResponse),
    onError: error => onError(error)
  });

  return (
    <button
      onClick={() => login()}
      className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <img
        src="/image/google.png"
        alt="Google"
        className="w-5 h-5"
      />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleButton; 