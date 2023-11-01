import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadDeviceData } from '../../app/utils/loadDeviceData';

type Device = {
  id: number;
  name: string;
  labels: string[];
  agent: string;
  ipaddress: string;
};

const DeviceDetails = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const id = parseInt(pathParts[pathParts.length - 1]);

  const [device, setDevice] = useState<Device | null>(null);

  // Init
  useEffect(() => {
    const fetchData = async () => {
      const devices: Device[] = await loadDeviceData();
      const foundDevice = devices.find((d) => d.id === id);
      if (foundDevice) {
        setDevice(foundDevice);
      }
    };
    fetchData();
  }, [id]);

  // Updating device in local storage
  useEffect(() => {
    if (device) {
      const devices = JSON.parse(localStorage.getItem('devicesData') || '[]');
      const updatedDevices = devices.map((d: Device) =>
        d.id === device.id ? device : d
      );
      localStorage.setItem('devicesData', JSON.stringify(updatedDevices));
    }
  }, [device]);

  // Handling input change
  const handleFieldChange = (
    field: keyof Device,
    value: string | number | string[]
  ) => {
    if (device) {
      setDevice({ ...device, [field]: value });
    }
  };

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
          value={device ? device.agent : ''}
          onChange={(e) => handleFieldChange('agent', e.target.value)}
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
          value={device ? device.ipaddress : ''}
          onChange={(e) => handleFieldChange('ipaddress', e.target.value)}
          className="px-2 py-0 border rounded focus:outline-none focus:border-zinc-800"
        />
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="ip-address" className="w-24 font-medium">
          Labels:
        </label>
        <input
          id="labels"
          type="text"
          readOnly
          style={{ width: '50%' }}
          value={device ? device.labels.join(', ') : ''}
          className="px-2 py-0 border rounded focus:outline-none focus:border-zinc-800"
        />
      </div>
    </>
  );
};

export default DeviceDetails;
