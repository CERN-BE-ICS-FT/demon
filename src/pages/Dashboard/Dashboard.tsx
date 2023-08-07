import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const [groupName, setGroupName] = useState('');

  const location = useLocation();

  const pathParts = location.pathname.split('/');

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    if (pathParts[2]) {
      setGroupName(decodeURIComponent(pathParts[2]));
    } else {
      setGroupName('Main View');
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col gap-4 m-8">
      <h1 className="text-2xl font-bold">Monitoring Dashboard {groupName}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded-md border-2 border-black">
          <h2 className="text-lg font-bold mb-4">CPU Usage</h2>
          <div className="flex justify-between items-end border-2">
            <div className="h-16 w-2 bg-blue-500"></div>
            <div className="h-24 w-2 bg-blue-500"></div>
            <div className="h-32 w-2 bg-blue-500"></div>
            <div className="h-20 w-2 bg-blue-500"></div>
            <div className="h-28 w-2 bg-blue-500"></div>
            <div className="h-16 w-2 bg-blue-500"></div>
          </div>
        </div>
        <div className="p-4 bg-gray-100 rounded-md border-2 border-black">
          <h2 className="text-lg font-bold mb-4">Memory Usage</h2>
          <div className="h-32 w-32 mx-auto relative">
            <div className="absolute top-0 left-0 h-32 w-32 bg-green-500 rounded-full"></div>
            <div className="absolute top-4 left-4 h-24 w-24 bg-gray-100 rounded-full"></div>
          </div>
        </div>
        <div className="p-4 bg-gray-100 rounded-md border-2 border-black">
          <h2 className="text-lg font-bold mb-4">Network Usage</h2>
          <div className="flex justify-between items-end border-2">
            <div className="h-24 w-2 bg-red-500"></div>
            <div className="h-32 w-2 bg-red-500"></div>
            <div className="h-20 w-2 bg-red-500"></div>
            <div className="h-28 w-2 bg-red-500"></div>
            <div className="h-24 w-2 bg-red-500"></div>
            <div className="h-32 w-2 bg-red-500"></div>
          </div>
        </div>
        <div className="p-4 bg-gray-100 rounded-md border-2 border-black">
          <h2 className="text-lg font-bold mb-4">Disk Usage</h2>
          <div className="flex justify-between items-end border-red border-2">
            <div className="h-32 w-2 bg-yellow-500"></div>
            <div className="h-24 w-2 bg-yellow-500"></div>
            <div className="h-16 w-2 bg-yellow-500"></div>
            <div className="h-20 w-2 bg-yellow-500"></div>
            <div className="h-24 w-2 bg-yellow-500"></div>
            <div className="h-32 w-2 bg-yellow-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
