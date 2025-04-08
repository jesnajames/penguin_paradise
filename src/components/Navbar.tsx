import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full top-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-heading font-bold text-gradient">
          PenguinParadise
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-primary hover:text-secondary transition-colors">Home</a>
          <a href="#species" className="text-primary hover:text-secondary transition-colors">Species</a>
          <a href="#facts" className="text-primary hover:text-secondary transition-colors">Facts</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
