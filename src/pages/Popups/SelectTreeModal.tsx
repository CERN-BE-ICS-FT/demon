import React, { useState, useEffect, useRef } from 'react';
import deleteIcon from '../../assets/icons/remove-wh.png';
import DeletePopup from './DeletePopup';

interface ImportTreesModalProps {
  open: boolean;
  handleClose: () => void;
  onAddTree: (tree: string) => void;
}

const useClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    // document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      // document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

const SelectTreeModal: React.FC<ImportTreesModalProps> = ({
  open,
  handleClose,
  onAddTree
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, handleClose);

  const [search, setSearch] = useState('');
  const [mockTrees, setMockTrees] = useState([
    'Tree 1',
    'Tree 2',
    'Tree 3',
    'Tree 4'
  ]);
  const [newTreeName, setNewTreeName] = useState('');
  const [selectedTree, setSelectedTree] = useState<string | null>(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  if (!open) return null;

  const filteredTrees = mockTrees.filter((tree) =>
    tree.toLowerCase().includes(search.toLowerCase())
  );

  const handleDeleteTree = (tree: string) => {
    console.log('Delete Tree clicked');
    setSelectedTree(tree);
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = () => {
    setMockTrees(mockTrees.filter((t) => t !== selectedTree));
    setShowDeletePopup(false);
  };

  const handleCreateTree = () => {
    setMockTrees([...mockTrees, newTreeName]);
    setNewTreeName('');
  };

  return (
    <>
      <div
        ref={ref}
        className="absolute z-10 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-64 mt-5"
      >
        <div className="p-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-zinc-800"
            id="username"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          {filteredTrees.map((tree, index) => (
            <div
              key={index}
              onClick={() => onAddTree(tree)}
              className="cursor-pointer flex justify-between items-center bg-zinc-200 p-1 rounded mt-2"
            >
              <div className="font-medium">{tree}</div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteTree(tree);
                }}
                className="delete-button bg-zinc-800 rounded p-1"
              >
                <img
                  src={deleteIcon}
                  alt="delete"
                  className="rounded-full h-4 w-4"
                />
              </div>
            </div>
          ))}

          <div className="mt-2 flex justify-between space-x-2">
            <input
              className="appearance-none border rounded w-3/5 py-2 px-3 text-black leading-tight focus:outline-none focus:border-zinc-800"
              id="newTreeName"
              type="text"
              placeholder="New Tree..."
              value={newTreeName}
              onChange={(e) => setNewTreeName(e.target.value)}
            />

            <button
              className="bg-zinc-800 text-white py-1 px-3 rounded w-2/5"
              onClick={handleCreateTree}
            >
              Create
            </button>
          </div>
        </div>
      </div>
      <DeletePopup
        open={showDeletePopup}
        handleClose={() => setShowDeletePopup(false)}
        handleConfirm={handleConfirmDelete}
        treeName={selectedTree || ''}
      />
    </>
  );
};

export default SelectTreeModal;
