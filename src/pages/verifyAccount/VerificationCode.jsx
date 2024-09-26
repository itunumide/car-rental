import React, { useState, useEffect } from 'react';

function VerificationCode({ onVerificationSuccess, email }) {
  const [code, setCode] = useState(Array(6).fill(''));
  const [error, setError] = useState('');
  const [backendCode, setBackendCode] = useState('');

  // Fetch the verification code from the backend
  useEffect(() => {
    const fetchVerificationCode = async () => {
      // Simulate fetching code from backend
      const fetchedCode = '123456'; // Replace with actual API call to get the code
      setBackendCode(fetchedCode);
    };

    fetchVerificationCode();
  }, []);

  const handleChange = (e, index) => {
    const newCode = [...code];
    if (/^[0-9]$/.test(e.target.value) || e.target.value === '') {
      newCode[index] = e.target.value.slice(-1);  // Ensure only the last input character is taken
      setCode(newCode);
      // Auto-focus next input
      if (e.target.value && index < 5) {
        document.getElementById(`verification-code-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = code.join('');
    // Compare the entered code with the backend-provided code
    if (enteredCode === backendCode) {
      onVerificationSuccess();
    } else {
      setError('Invalid code');
    }
  };

  const handleKeyDown = (e) => {
    // Allow only numeric keys
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="relative bg-gradient-to-r from-gray-100 to-custom-yellow-300 px-8 py-16 rounded-lg shadow-lg w-full max-w-lg text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className='flex items-center justify-center pb-2'>
            <svg className="h-8 w-8 text-custom-yellow-400" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.879px" height="88.855px" viewBox="0 0 122.879 88.855" enable-background="new 0 0 122.879 88.855" xml:space="preserve">
              <g><path fill="currentColor" stroke="none" stroke-width="2" d="M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759 c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461 c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048 c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0z M5.406,78.842l38.124-38.22L5.406,9.538V78.842 L5.406,78.842z M47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043 L47.729,44.045L47.729,44.045z M80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549z M8.867,5.406l53.521,43.639 l51.223-43.639H8.867L8.867,5.406z" /></g>
            </svg>
          </div>
          {/* Main heading */}
          <h2 className="text-2xl font-semibold mb-2">Please Verify Account</h2>
          <p className="text-gray-600 mb-6">
            Enter the six digit code we sent to <strong>{email}</strong> to verify your new account:
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mb-6">
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`verification-code-input-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  maxLength="1"
                  className="border border-gray-300 text-center p-2 mx-1 w-12 h-12 text-lg rounded"
                  onKeyDown={handleKeyDown}
                />
              ))}
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-custom-yellow-400 hover:bg-custom-yellow-300 text-white font-semibold py-2 px-4 rounded w-full border-none"
            >
              Verify & Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerificationCode;