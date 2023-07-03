import React from 'react';

const Footer = () => {
  return (
    <footer className="relative">
      <div className="flex justify-center items-center h-20 text-white text-sm z-10 absolute top-0 left-0 w-full h-10 bg-gradient-to-r from-blue-900 to-blue-400 z-0">
        <p>&copy; 2023 CERN ICS FT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
