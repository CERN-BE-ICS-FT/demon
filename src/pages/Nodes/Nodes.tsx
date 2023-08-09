import { useEffect, useState } from 'react';
import addIcon from '../Catalog/add.png';
import deleteIcon from '../../app/common/rows/delete.png';
import { useLocation } from 'react-router-dom';

const tagOptions = ['tag1', 'tag2']; // adjust according to your requirements
const addToOptions = ['add1', 'add2'];

const Nodes = () => {
  const [search, setSearch] = useState('');
  const [tableSearch, setTableSearch] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [importFrom, setImportFrom] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [addTo, setAddTo] = useState<string[]>([]);
  const [agent, setAgent] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const location = useLocation();
  const [nodeName, setGroupName] = useState('');

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

  const mockRules = [
    'Group 1 Rules XYZ',
    'Group 2 Rules ABC',
    'Group 3 Rules DEF'
  ];

  const mockData = [
    {
      id: '1',
      name: 'Group Kryo',
      type: 'Group',
      link: 'https://www.mockurl.com/group-kryo',
      tag: 'kryo'
    },
    {
      id: '2',
      name: 'Group Electro',
      type: 'Group',
      link: 'https://www.mockurl.com/group-electro',
      tag: 'plc'
    },
    {
      id: '3',
      name: 'Device 123',
      type: 'Device',
      link: 'https://www.mockurl.com/device-123',
      tag: 'scada'
    },
    {
      id: '4',
      name: 'Device 234',
      type: 'Device',
      link: 'https://www.mockurl.com/device-234',
      tag: 'automation'
    },
    {
      id: '5',
      name: 'Group Alpha',
      type: 'Group',
      link: 'https://www.mockurl.com/group-alpha',
      tag: 'alpha'
    },
    {
      id: '7',
      name: 'Group Omega',
      type: 'Group',
      link: 'https://www.mockurl.com/group-omega',
      tag: 'omega'
    }
  ];

  const filteredRules = mockRules.filter((rule) =>
    rule.toLowerCase().includes(search.toLowerCase())
  );

  const filteredData = mockData.filter((data) =>
    data.name.toLowerCase().includes(tableSearch.toLowerCase())
  );

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleSelect = (id: string) => {
    setSelectedIds((prevState) =>
      prevState.includes(id)
        ? prevState.filter((itemId) => itemId !== id)
        : [...prevState, id]
    );
  };

  const handleSelectAll = () => {
    setSelectAll((prevState) => {
      if (!prevState) {
        setSelectedIds(mockData.map((item) => item.id));
      } else {
        setSelectedIds([]);
      }
      return !prevState;
    });
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
    <div className="space-y-4">
      <h1 className="text-lg text-left p-4">
        Properties of <span className="font-bold">{nodeName}</span>
      </h1>

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
        {type == 'Group' && (
          <>
            <div className="flex items-center space-x-2">
              <label className="w-24 font-medium">Add:</label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="checkbox"
                    value="add1"
                    checked={addTo.includes('add1')}
                    onChange={() => handleCheckboxChange(setAddTo, 'add1')}
                  />{' '}
                  Device 1
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="add2"
                    checked={addTo.includes('add2')}
                    onChange={() => handleCheckboxChange(setAddTo, 'add2')}
                  />{' '}
                  Device 2
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="add2"
                    checked={addTo.includes('add2')}
                    onChange={() => handleCheckboxChange(setAddTo, 'add2')}
                  />{' '}
                  Device 3
                </label>
              </div>
            </div>
          </>
        )}
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
      <div className="flex sm:mt-0 sm:ml-4 sm:text-left mt-24 pt-16 w-full">
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tableSearch"
          type="text"
          placeholder="Search in table..."
          onChange={(e) => setTableSearch(e.target.value)}
          value={tableSearch}
          style={{ width: '100%' }}
        />
        <button className="ml-2 rounded p-2  bg-red-400">
          <img src={deleteIcon} alt="Delete" className="w-8 h-8" />
        </button>
        <button className="ml-2 rounded p-2 bg-bluet-400">
          <img src={addIcon} alt="Add" className="w-8 h-7" />
        </button>
      </div>

      <table className="w-full mt-4 divide-y divide-gray-200">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Link</th>
            <th className="px-4 py-2">Tag</th>
            <th className="px-4 py-2">
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
              <td className="px-4 py-2">{item.type}</td>
              <td className="px-4 py-2">{item.link}</td>
              <td className="px-4 py-2">{item.tag}</td>
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
    </div>
  );
};

export default Nodes;
