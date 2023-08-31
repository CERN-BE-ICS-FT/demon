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

  const updateDeviceData = async (updatedDevices: Device[]) => {
    localStorage.setItem('devicesData', JSON.stringify(updatedDevices));
  };

  useEffect(() => {
    const fetchDeviceDetails = async () => {
      const devices = await loadDeviceData();

      const foundDevice = devices.find((d: Device) => d.id === id);

      if (foundDevice) {
        setDevice(foundDevice);
      }
    };

    fetchDeviceDetails();
  }, [id]);

  const handleFieldChange = (
    field: keyof Device,
    value: string | number | string[]
  ) => {
    if (device) {
      setDevice({
        ...device,
        [field]: value
      });
    }
  };

  useEffect(() => {
    if (device) {
      (async () => {
        const devices = await loadDeviceData();
        const index = devices.findIndex((d: Device) => d.id === id);
        if (index > -1) {
          devices[index] = device;
          await updateDeviceData(devices);
        }
      })();
    }
  }, [device, id]);

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
          style={{ width: '50%' }}
          value={device ? device.labels.join(', ') : ''}
          className="px-2 py-0 border rounded focus:outline-none focus:border-zinc-800"
        />
      </div>
    </>
  );
};

export default DeviceDetails;
