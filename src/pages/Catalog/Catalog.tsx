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
    </div>
  );
};

export default Catalog;
