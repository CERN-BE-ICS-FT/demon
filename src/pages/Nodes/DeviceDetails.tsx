import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { loadDeviceData } from '../../app/utils/loadDeviceData';

type Device = {
  id: number;
  name: string;
  labels: string[];
  agent: string;
  ipaddress: string;
};

const DeviceDetails = () => {
  const [agent, setAgent] = useState('');
  const [ipAddress, setIpAddress] = useState('');

  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const id = pathParts[pathParts.length - 1];
  //   console.log(id);

  useEffect(() => {
    const fetchDeviceDetails = async () => {
      const devices = await loadDeviceData();

      if (!Array.isArray(devices)) {
        console.error('Expected an array of devices, but got:', devices);
        return;
      }

      const device = devices.find(
        (device: Device) => device.id === parseInt(id)
      );
      if (device) {
        setAgent(device.agent);
        setIpAddress(device.ipaddress);
      }
    };

    fetchDeviceDetails();
  }, [id]);

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
