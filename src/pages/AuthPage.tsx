import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const AuthPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-secondary px-4 py-12">
      {showLogin ? (
        <Login onSwitchToSignup={() => setShowLogin(false)} />
      ) : (
        <Signup onSwitchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
};

export default AuthPage;
