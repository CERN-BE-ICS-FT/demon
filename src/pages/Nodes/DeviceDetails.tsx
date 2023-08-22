import React, { useState } from 'react';

const DeviceDetails = () => {
  const [agent, setAgent] = useState('');
  const [ipAddress, setIpAddress] = useState('');

  return (
    <>
      <div className="flex items-center space-x-2">
        <label htmlFor="agent" className="w-24 font-medium">
          Agent:
        </label>
        <input
          id="agent"
          type="text"
          style={{ width: '50%' }}
          value={agent}
          onChange={(e) => setAgent(e.target.value)}
          className="px-2 py-0 border rounded focus:outline-none focus:border-zinc-800"
        />
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="ip-address" className="w-24 font-medium">
          IP-Address:
        </label>
        <input
          id="ip-address"
          type="text"
          style={{ width: '50%' }}
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          className="px-2 py-0 border rounded focus:outline-none focus:border-zinc-800"
        />
      </div>
    </>
  );
};

export default DeviceDetails;
