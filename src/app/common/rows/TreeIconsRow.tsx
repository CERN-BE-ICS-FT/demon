import newFileIcon from './new-file.png';
import newFolderIcon from './new-folder.png';
import hardDiskIcon from './hard-disk.png';
import deleteIcon from './delete.png';
import saveIcon from './save.png';
import { useNavigate } from 'react-router-dom';
import Separator from '../elements/Separator';

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
  const navigate = useNavigate();

  const handleFileClick = () => {
    console.log(`new file in ${activeItem} created`);
  };
  const handleFolderClick = () => {
    console.log(`new folder in ${activeItem} created`);
  };
  const handleDeleteClick = () => {
    console.log(`${activeItem} deleted`);
  };
  const handleHardDiskClick = () => {
    console.log('Shit router needed');
    navigate('/catalog');
  };

  return (
    <>
      <Separator></Separator>
      <div className="flex justify-center space-x-4 mx-4 w-[300px]">
        <button
          onClick={handleFileClick}
          disabled={!isActive}
          className={`p-2 ${
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
          className={`p-2 ${
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
          className={`p-2 ${
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
        <button
          onClick={handleHardDiskClick}
          className="p-2 bg-purple-400 rounded text-black"
        >
          <img
            src={hardDiskIcon}
            alt="hard disk"
            className="filter-none"
            onClick={resetSelectedItem}
          />
        </button>
        <button
          onClick={handleHardDiskClick}
          className="p-2 bg-green-400 rounded text-black"
        >
          <img
            src={saveIcon}
            alt="hard disk"
            className="filter-none w-6"
            onClick={resetSelectedItem}
          />
        </button>
      </div>
      <Separator></Separator>
    </>
  );
};

export default TreeIconsRow;
