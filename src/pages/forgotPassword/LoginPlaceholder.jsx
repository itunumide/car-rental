// Temporary Login placeholder (until the actual Login page is available)
import React from "react";
import { Link } from "react-router-dom";

const LoginPlaceholder = () => {
    return (
      <div>
        <h1>Login Page Placeholder</h1>
        <p>
          Forgot your password?{" "}
          <Link to="/reset-password">Click here to reset your password</Link>
        </p>
      </div>
    );
};

export default LoginPlaceholder;