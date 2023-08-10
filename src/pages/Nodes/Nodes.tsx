import { useEffect, useState } from 'react';
import addIcon from '../Catalog/add.png';
import deleteIcon from '../../app/common/rows/delete.png';
import { useLocation } from 'react-router-dom';
import AddDevicesModal from '../Popups/AddDevicesModal';
import DeleteDevicesModal from '../Popups/DeleteDevicesModal';
import ToggleButton from '../../app/common/buttons/ToggleButton';

const Nodes = () => {
  const [search, setSearch] = useState('');
  const [addTo, setAddTo] = useState<string[]>([]);
  const [agent, setAgent] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [hide, setHide] = useState(false);
  const location = useLocation();
  const [nodeName, setGroupName] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagFilter, setTagFilter] = useState<string>('');
  const [tableSearch, setTableSearch] = useState('');
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const pathParts = location.pathname.split('/');

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    setGroupName(decodeURIComponent(pathParts[3]));
  }, [location.pathname]);

  const handleCheckboxChange = (
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const mockData = [
    {
      id: '1',
      name: 'Device 123',
      type: 'Device',
      link: 'https://www.mockurl.com/device-123',
      tag: 'kryo'
    },
    {
      id: '2',
      name: 'Device 234',
      type: 'Device',
      link: 'https://www.mockurl.com/device-234',
      tag: 'plc'
    },
    {
      id: '3',
      name: 'Device 345',
      type: 'Device',
      link: 'https://www.mockurl.com/device-345',
      tag: 'scada'
    },
    {
      id: '4',
      name: 'Device 456',
      type: 'Device',
      link: 'https://www.mockurl.com/device-456',
      tag: 'automation'
    }
  ];

  const filteredData = mockData.filter(
    (data) =>
      data.name.toLowerCase().includes(tableSearch.toLowerCase()) &&
      (!tagFilter || data.tag === tagFilter)
  );

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleSelectAll = () => {
    setSelectAll((prevState) => {
      setSelectedIds(prevState ? [] : filteredData.map((item) => item.id));
      return !prevState;
    });
  };

  const handleSelect = (id: string) => {
    setSelectedIds((prevState) =>
      prevState.includes(id)
        ? prevState.filter((itemId) => itemId !== id)
        : [...prevState, id]
    );
  };

  const handleAddClick = () => {
    setShowAddPopup(true);
  };
  const handleAddConfirm = () => {
    console.log('Addition confirmed');
  };
  const handleAddClose = () => {
    setShowAddPopup(false);
  };

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };
  const handleDeleteConfirm = () => {
    console.log('Deleteition confirmed');
  };
  const handleDeleteClose = () => {
    setShowDeletePopup(false);
  };

  const handleToggleChange = (isActive: boolean) => {
    console.log('Toggle is now', isActive ? 'active' : 'inactive');
  };

  if (!pathParts[3]) {
    return (
      <div>
        <p className="mt-4 text-xl">
          To edit the node, select a node on the tree view.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl pt-4">{nodeName}</h1>
      <div className="text-gray-600 text-lg mb-4">Device</div>

      <ToggleButton onChange={handleToggleChange} />

      <form className="space-y-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="name" className="w-24 font-medium">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-grow px-2 py-1 border rounded shadow-sm focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="name" className="w-24 font-medium">
            Hide:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-grow px-2 py-1 border rounded shadow-sm focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="type" className="w-24 font-medium">
            Type:
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="flex-grow px-2 py-1 border rounded shadow-sm focus:outline-none focus:border-blue-400"
          >
            <option value="Device">Device</option>
            <option value="Group">Group</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <label className="w-24 font-medium">Tags:</label>
          <div className="flex space-x-4">
            <label>
              <input
                type="checkbox"
                value="tag1"
                checked={tags.includes('tag1')}
                onChange={() => handleCheckboxChange(setTags, 'tag1')}
              />{' '}
              Tag 1
            </label>
            <label>
              <input
                type="checkbox"
                value="tag2"
                checked={tags.includes('tag2')}
                onChange={() => handleCheckboxChange(setTags, 'tag2')}
              />{' '}
              Tag 2{/* More checkboxes as needed */}
            </label>
          </div>
        </div>
        {type !== 'Group' && (
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
                className="flex-grow px-2 py-1 border rounded shadow-sm focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="ip-address" className="w-24 font-medium">
                IP-Address:
              </label>
              <input
                id="ip-address"
                type="text"
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
                className="flex-grow px-2 py-1 border rounded shadow-sm focus:outline-none focus:border-blue-400"
              />
            </div>
          </>
        )}
      </form>

      {/* Table view */}
      {type !== 'Device' && (
        <div className="mt-12 pt-8 ">
          <h1 className="text-2xl mb-4">Devices:</h1>
          <div className="flex sm:mt-0 sm:ml-4 sm:text-left w-full space-x-4">
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tableSearch"
              type="text"
              placeholder="Search in table..."
              onChange={(e) => setTableSearch(e.target.value)}
              value={tableSearch}
              style={{ width: '60%' }}
            />
            <div className="flex space-x-2">
              <select
                onChange={(e) => setTagFilter(e.target.value)}
                className="border rounded px-2 py-1"
              >
                <option value="">Filter by tag</option>
                <option value="kryo">Kryo</option>
                <option value="plc">PLC</option>
                <option value="scada">SCADA</option>
                <option value="automation">Automation</option>
              </select>
              <button
                className="ml-2 rounded p-2 bg-red-400"
                onClick={handleDeleteClick}
              >
                <img src={deleteIcon} alt="Delete" className="w-8 h-8" />
              </button>
              <button
                className="ml-2 rounded p-2 bg-bluet-400"
                onClick={handleAddClick}
              >
                <img src={addIcon} alt="Add" className="w-8 h-8" />
              </button>
            </div>
          </div>

          <table className="w-full mt-4 divide-y divide-gray-200">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Tag</th>
                <th className="px-4 py-2">Link</th>
                <th className="px-4 py-2">
                  <div className="mb-2">Selected: {selectedIds.length}</div>
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectAll}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.tag}</td>
                  <td className="px-4 py-2">{item.link}</td>
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(item.id)}
                      onChange={() => handleSelect(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <AddDevicesModal
            open={showAddPopup}
            numberOfItems={selectedIds.length}
            groupName={nodeName}
            handleClose={handleAddClose}
            handleConfirm={handleAddConfirm}
          />
          <DeleteDevicesModal
            open={showDeletePopup}
            numberOfItems={selectedIds.length}
            groupName={nodeName}
            handleClose={handleDeleteClose}
            handleConfirm={handleDeleteConfirm}
          />
        </div>
      )}
    </div>
  );
};

export default Nodes;
