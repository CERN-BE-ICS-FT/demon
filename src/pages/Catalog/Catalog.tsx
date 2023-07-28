import { useState } from 'react';

const Catalog = () => {
  const [search, setSearch] = useState('');
  const mockRules = [
    'Group 1 Rules XYZ',
    'Group 2 Rules ABC',
    'Group 3 Rules DEF'
  ];

  const filteredRules = mockRules.filter((rule) =>
    rule.toLowerCase().includes(search.toLowerCase())
  );

  const mockData = [
    { id: '1', name: 'Item 1', type: 'Type A', link: 'Link A', tag: 'Tag A' },
    { id: '2', name: 'Item 2', type: 'Type B', link: 'Link B', tag: 'Tag B' },
    { id: '3', name: 'Item 3', type: 'Type C', link: 'Link C', tag: 'Tag C' }
  ];

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
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        {filteredRules.map((rule, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-200 p-3 rounded mt-4 w-[400px]"
          >
            <div className="text-lg font-medium">{rule}</div>
            <button className="bg-green-500 text-white py-1 px-3 rounded">
              Add
            </button>
          </div>
        ))}
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
          {mockData.map((item) => (
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
