import React from 'react';

const NotFound = () => {
  return (
    <div
      data-testid="not-found-1"
      className="flex items-center justify-center h-full"
    >
      <div>
        <h1 className="text-9xl font-bold text-gray-800">404 &nbsp;</h1>
        <h2 className="text-5xl font-medium text-gray-600">Page not found</h2>
      </div>
    </div>
  );
};

export default NotFound;
