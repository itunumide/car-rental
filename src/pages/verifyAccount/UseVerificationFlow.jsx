import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useVerificationFlow = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleVerificationSent = (email) => {
    setEmail(email);
    navigate('/verify-account');
  };

  const handleVerificationSuccess = () => {
    navigate('/verification-success');
  };

  const handleLoginRedirect = () => {
    // Redirect to login page or login route
    navigate('/login');
  };

  return {
    email,
    handleVerificationSent,
    handleVerificationSuccess,
    handleLoginRedirect,
  };
};

export default useVerificationFlow;