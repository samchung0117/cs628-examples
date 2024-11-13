import React from "react";

const Login = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL; 
  return (
    <a href={`${backendUrl}/auth/github`}
    className="btn btn-primary">
      Login with GitHub
    </a>
  );
};

export default Login;
