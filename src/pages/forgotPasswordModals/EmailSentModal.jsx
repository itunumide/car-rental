import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmailSentModal = ({ email, onResend }) => {
    const navigate = useNavigate();

    // Handle the "Continue" button click to navigate to the /login-placeholder
  const handleSignIn = () => {
    // Or you can navigate to any other page, like the login page or home
    navigate('/login-placeholder'); // Navigate to the dashboard route after successful password reset
  }
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">Check Your Email</h2>
        <p className="text-sm text-gray-500 mb-4">
          We've sent a password reset link to <strong>{email}</strong>. <br />
          Please check your email to proceed.
        </p>

        {/* Button to resend the email */}
        <button onClick={onResend} className="mb-2 w-full bg-custom-yellow-500 text-white py-2 rounded-lg">
          Resend Email
        </button>

        {/* Continue to next step */}
        <button onClick={handleSignIn} className="w-full bg-gray-300 py-2 rounded-lg">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default EmailSentModal;