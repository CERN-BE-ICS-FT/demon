import newFileIcon from './new-file.png';
import newFolderIcon from './new-folder.png';
import deleteIcon from './delete.png';
import saveIcon from './save.png';
import { useNavigate } from 'react-router-dom';
import Separator from '../elements/Separator';
import { useState } from 'react';
import DeletePopup from '../../../pages/Popups/DeletePopup';
import uploadIcon from './upload.png';
import downloadIcon from './download.png';

interface TreeIconsRowProps {
  isActive: boolean;
  activeItem: string;
  resetSelectedItem: () => void;
}

const TreeIconsRow: React.FC<TreeIconsRowProps> = ({
  isActive,
  activeItem,
  resetSelectedItem
}) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const navigate = useNavigate();

  const handleFileClick = () => {
    console.log(`new file in ${activeItem} created`);
  };
  const handleFolderClick = () => {
    console.log(`new folder in ${activeItem} created`);
  };
  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };
  const handleConfirmDelete = () => {
    console.log(`Confirmed deletion of ${activeItem}`);
  };
  const handleHardDiskClick = () => {
    navigate('/settings/harddrive');
  };

  return (
    <>
      <Separator></Separator>
      <div className="flex justify-between mx-4 w-[300px]">
        <div className="flex space-x-4">
          <button
            onClick={handleFileClick}
            disabled={!isActive}
            className={`p-1 ${
              isActive
                ? 'bg-blue-400 rounded text-black'
                : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            <img
              src={newFileIcon}
              alt="new file"
              className={isActive ? 'filter-none' : 'filter grayscale'}
            />
          </button>
          <button
            onClick={handleFolderClick}
            disabled={!isActive}
            className={`p-1 ${
              isActive
                ? 'bg-blue-400 rounded text-black'
                : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            <img
              src={newFolderIcon}
              alt="new folder"
              className={isActive ? 'filter-none' : 'filter grayscale'}
            />
          </button>
          <button
            onClick={handleDeleteClick}
            disabled={!isActive}
            className={`p-1 ${
              isActive
                ? 'bg-red-400 rounded text-black'
                : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            <img
              src={deleteIcon}
              alt="delete"
              className={isActive ? 'filter-none' : 'filter grayscale'}
            />
          </button>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleHardDiskClick}
            className="p-1 bg-green-400 rounded text-black"
          >
            <img
              src={downloadIcon}
              alt="hard disk"
              className="filter-none w-6"
              onClick={resetSelectedItem}
            />
          </button>
          <button
            onClick={handleHardDiskClick}
            className="p-1 bg-green-400 rounded text-black"
          >
            <img
              src={uploadIcon}
              alt="hard disk"
              className="filter-none w-6"
              onClick={resetSelectedItem}
            />
          </button>
        </div>
      </div>
      <Separator></Separator>
      <DeletePopup
        open={showDeletePopup}
        handleClose={() => setShowDeletePopup(false)}
        handleConfirm={handleConfirmDelete}
        treeName={activeItem}
      />
    </>
  );
};

export default TreeIconsRow;
