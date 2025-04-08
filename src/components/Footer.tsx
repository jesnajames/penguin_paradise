import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">PenguinParadise</h3>
            <p className="text-gray-300">
              Exploring and protecting the world's penguin species.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#species" className="text-gray-300 hover:text-white">Species</a></li>
              <li><a href="#facts" className="text-gray-300 hover:text-white">Facts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Connect</h4>
            <p className="text-gray-300">
              Stay updated with our latest penguin news and conservation efforts.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          © 2024 PenguinParadise. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
