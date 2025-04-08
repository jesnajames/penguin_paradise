import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './ui/Button'; // Assuming Button component exists

const Navbar: React.FC = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/'); // Redirect to home after logout
  };

  return (
    <nav className="fixed w-full top-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-heading font-bold text-gradient">
          PenguinParadise
        </Link>
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link to="/" className="text-primary hover:text-secondary transition-colors hidden md:inline">Home</Link>
          <a href="/#species" className="text-primary hover:text-secondary transition-colors hidden md:inline">Species</a>
          <a href="/#facts" className="text-primary hover:text-secondary transition-colors hidden md:inline">Facts</a>
          {!loading && (
            <>
              {user ? (
                <>
                  <span className="text-sm text-primary hidden md:inline">Hi, {user.email?.split('@')[0]}</span>
                  <Button onClick={handleLogout} variant="outline" size="sm">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="primary" size="sm">
                      Login / Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
