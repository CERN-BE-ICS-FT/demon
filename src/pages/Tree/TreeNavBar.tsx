import React, { useState, useEffect } from 'react';
import SelectTreeModal from '../Popups/SelectTreeModal';
import { treeData } from './TreeData';
import arrowDown from './arrow-down.png';

const TreeNavBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTree, setSelectedTree] = useState(treeData.name);

  useEffect(() => {
    console.log('Active tree:', selectedTree);
  }, [selectedTree]);

  const handleAddTree = (tree: string) => {
    setSelectedTree(tree);
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative flex justify-between items-center w-[170px] space-x-2 border-2 border-black rounded-md my-1 ml-4">
      {selectedTree && (
        <p className="text-lg font-bold flex-grow text-left pl-2">
          {selectedTree}
        </p>
      )}
      <div className="inline-flex justify-between">
        <img
          className={`w-8 transform ${isModalOpen ? 'rotate-180' : ''}`}
          src={arrowDown}
          alt="Arrow"
          onClick={toggleModal}
        />
      </div>

      <div className="absolute left-[-10px]">
        <SelectTreeModal
          open={isModalOpen}
          handleClose={toggleModal}
          onAddTree={handleAddTree}
        />
      </div>
    </div>
  );
};

export default TreeNavBar;
