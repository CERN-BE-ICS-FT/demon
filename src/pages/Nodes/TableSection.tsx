import React, { useEffect, useState } from 'react';
import DeleteDevicesModal from '../Popups/DeleteDevicesModal';
import AddDevicesModal from '../Popups/AddDevicesModal';
import SwitchTab from '../../app/common/buttons/SwitchTab';
import moveIcon from '../../assets/icons/box-move-wh.png';
import removeIconWhite from '../../assets/icons/remove-wh.png';
import { loadDeviceData } from '../../app/utils/loadDeviceData';

const TableSection = () => {
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [tagFilter, setTagFilter] = useState<string>('');
  const [tableSearch, setTableSearch] = useState('');
  const [nodeName, setGroupName] = useState('# TODO'); // TODO
  const [devicesData, setDevicesData] = useState<any[]>([]);
  const allLabels = devicesData.flatMap((device) => device.labels);
  const uniqueLabelsSet = new Set(allLabels);
  const uniqueLabelsArray = Array.from(uniqueLabelsSet);

  const [activeTab, setActiveTab] = useState<'members' | 'outsiders'>(
    'members'
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadDeviceData();
      setDevicesData(data);
    };

    fetchData();
  }, []);

  const filteredData = devicesData
    .filter(
      (data) =>
        (activeTab === 'members' && data.name.includes('2')) ||
        (activeTab === 'outsiders' && !data.name.includes('2'))
    )
    .filter(
      (data) =>
        data.name.toLowerCase().includes(tableSearch.toLowerCase()) &&
        (!tagFilter || data.labels.includes(tagFilter))
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

  return (
    <>
      <div className="mt-12">
        <h1 className="text-lg font-bold my-4">Device collection</h1>
        <div className="flex sm:mt-0 sm:ml-4 sm:text-left w-full space-x-4">
          <input
            className="appearance-none border rounded px-3 text-black leading-tight focus:outline-none focus:border-zinc-800"
            id="tableSearch"
            type="text"
            style={{ width: '30%' }}
            placeholder="Search in table..."
            onChange={(e) => setTableSearch(e.target.value)}
            value={tableSearch}
          />
          <select
            onChange={(e) => setTagFilter(e.target.value)}
            className="border rounded px-2 focus:outline-none focus:border-zinc-800 w-48"
          >
            <option value="">Filter by label</option>
            {uniqueLabelsArray.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
          <div style={{ width: '30%' }}>
            <SwitchTab onChange={setActiveTab} />
          </div>
          <div className="flex">
            {activeTab === 'members' && (
              <button
                className="rounded bg-zinc-800 w-8 h-8 p-1"
                onClick={handleDeleteClick}
              >
                <img src={removeIconWhite} alt="Delete" />
              </button>
            )}
            {activeTab === 'outsiders' && (
              <button
                className="rounded bg-zinc-800  w-8 h-8 p-1"
                onClick={handleAddClick}
              >
                <img src={moveIcon} alt="Add" />
              </button>
            )}
          </div>
        </div>

        <table className="w-full mt-4 divide-y divide-zinc-200">
          <thead>
            <tr className="border-b border-zinc-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Label</th>
              <th className="px-4 py-2">IP Address</th>
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
              <tr key={item.id} className="border-b border-zinc-200">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.labels.join(', ')}</td>
                <td className="px-4 py-2">{item.ipaddress}</td>
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
    </>
  );
};

export default TableSection;
