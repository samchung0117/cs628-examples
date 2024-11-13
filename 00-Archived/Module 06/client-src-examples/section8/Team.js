// Section 8 - Team.js
// https://reactrouter.com/en/main/components/navigate#navigate
import React, { useState } from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';

function Team() {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleRedirectToHome = () => {
    setRedirectToHome(true);
  };

  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>This is Team Component</h2>
      <div>
        <ul>
          <li>
            <Link to="/team/member/1">Member 1</Link>
          </li>
          <li>
            <Link to="/team/member/2">Member 2</Link>
          </li>
          <li>
            <Link to="/team/member/3">Member 3</Link>
          </li>
        </ul>
        {/* Adding a button to trigger the redirect */}
        <button onClick={handleRedirectToHome}>Redirect to Home</button>
      </div>
      <Outlet />
    </div>
  );
}

export default Team;