import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            to="/"
            className="text-white hover:text-gray-300 px-2 py-1 rounded"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/rules"
            className="text-white hover:text-gray-300 px-2 py-1 rounded"
          >
            Rules
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 px-2 py-1 rounded"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
