import { useState } from 'react';
import addIcon from './add.png';
import deleteIcon from '../../app/common/rows/delete.png';

const Catalog = () => {
  const [search, setSearch] = useState('');
  const [tableSearch, setTableSearch] = useState('');

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
      id: '6',
      name: 'Device Beta',
      type: 'Device',
      link: 'https://www.mockurl.com/device-beta',
      tag: 'beta'
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
  return (
    <div>
      <h1 className="text-3xl p-4">Catalog</h1>

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

export default Catalog;
