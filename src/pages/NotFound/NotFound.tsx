import React from 'react';

const NotFound = () => {
  return (
    <div
      data-testid="not-found-1"
      // className="fixed inset-0 flex items-center justify-center"
      // style={{ zIndex: 9999, backdropFilter: 'blur(4px)' }}
    >
      <div>
        <h1 className="text-9xl font-bold text-black">404 &nbsp;</h1>
        <h2 className="text-5xl font-medium text-black">Page not found</h2>
      </div>
    </div>
  );
};

export default NotFound;
