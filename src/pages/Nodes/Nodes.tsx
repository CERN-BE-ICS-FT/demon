import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Separator from '../../app/common/elements/Separator';
import TableSection from './TableSection';
import FormSection from './FormSection';
import DeviceDetails from './DeviceDetails';

const Nodes = () => {
  const location = useLocation();
  const [nodeName, setGroupName] = useState('');
  const [type, setType] = useState('Device');

  const pathParts = location.pathname.split('/');

  useEffect(() => {
    const pathParts = location.pathname.split('/');

    const itemType = pathParts[3];

    if (itemType === 'device') {
      setType('Device');
    } else if (itemType === 'group') {
      setType('Group');
    }

    setGroupName(decodeURIComponent(pathParts[3]));
  }, [location.pathname]);

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    setGroupName(decodeURIComponent(pathParts[3]));
  }, [location.pathname]);

  if (!pathParts[3]) {
    return (
      <div>
        <p className="mt-4">
          To edit the node, select a node on the tree view.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* <h1 className="text-lg pt-4 font-bold">{nodeName}</h1> */}
      <div className="text-zinc-600  mb-4">{type}</div>

      <form className="space-y-4">
        {/* Tree fields form */}
        <FormSection />

        <Separator></Separator>

        {/* Device details form */}
        {type === 'Device' && <DeviceDetails />}
      </form>

      {/* Table view */}
      {type === 'Group' && (
        <>
          <TableSection />
        </>
      )}
    </div>
  );
};

export default Nodes;
