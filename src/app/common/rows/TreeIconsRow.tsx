import newDeviceIcon from '../../../assets/icons/add-device-wh.png';
import newGroupIcon from '../../../assets/icons/add-group-wh.png';
import { useNavigate } from 'react-router-dom';
import Separator from '../elements/Separator';
import { useState } from 'react';
import DeletePopup from '../../../pages/Popups/DeletePopup';
import uploadIcon from '../../../assets/icons/upload-wh.png';
import downloadIcon from '../../../assets/icons/download-wh.png';
import moveIcon from '../../../assets/icons/box-move-wh.png';
import removeIcon from '../../../assets/icons/remove-wh.png';
import UploadDownloadPopup from '../../../pages/Popups/UploadDownloadModal';

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
  const [showUploadDownloadPopup, setShowUploadDownloadPopup] = useState(false);
  const [isAboutUpload, setIsAboutUpload] = useState<boolean | null>(null);

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
  const handleConfirmUpload = () => {
    console.log('Confirmed upload');
  };
  const handleConfirmDownload = () => {
    console.log('Confirmed download');
  };
  const handleUploadClick = () => {
    setIsAboutUpload(true);
    setShowUploadDownloadPopup(true);
  };

  const handleDownloadClick = () => {
    setIsAboutUpload(false);
    setShowUploadDownloadPopup(true);
  };

  return (
    <>
      <Separator></Separator>
      <div className="min-w-[220px] flex justify-between mx-2 flex-grow">
        <div className="flex space-x-2">
          <button
            onClick={handleFileClick}
            disabled={!isActive}
            className={`p-1 w-6 h-6 bg-zinc-800 rounded text-black ${
              !isActive ? 'cursor-not-allowed' : ''
            }`}
          >
            <img
              src={newDeviceIcon}
              alt="new file"
              className={isActive ? 'filter-none' : 'filter grayscale'}
            />
          </button>
          <button
            onClick={handleFolderClick}
            disabled={!isActive}
            className={`p-1 w-6 h-6 bg-zinc-800 rounded text-black ${
              !isActive ? 'cursor-not-allowed' : ''
            }`}
          >
            <img
              src={newGroupIcon}
              alt="new folder"
              className={isActive ? 'filter-none' : 'filter grayscale'}
            />
          </button>
          <button
            onClick={handleDeleteClick}
            disabled={!isActive}
            className={`p-1 w-6 h-6 bg-zinc-800 rounded text-black ${
              !isActive ? 'cursor-not-allowed' : ''
            }`}
          >
            <img
              src={removeIcon}
              alt="Remove"
              className={isActive ? 'filter-none' : 'filter grayscale'}
            />
          </button>
          <button
            onClick={handleDeleteClick}
            disabled={!isActive}
            className={`p-1 w-6 h-6 bg-zinc-800 rounded text-black ${
              !isActive ? 'cursor-not-allowed' : ''
            }`}
          >
            <img
              src={moveIcon}
              alt="Move"
              className={isActive ? 'filter-none' : 'filter grayscale'}
            />
          </button>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleDownloadClick}
            className="p-1 w-6 h-6 bg-zinc-800 rounded text-black"
          >
            <img
              src={downloadIcon}
              alt="Download changes"
              className="filter-none"
              onClick={resetSelectedItem}
            />
          </button>
          <button
            onClick={handleUploadClick}
            className="p-1 w-6 h-6 bg-zinc-800 rounded text-black"
          >
            <img
              src={uploadIcon}
              alt="Upload changes"
              className="filter-none"
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
      <UploadDownloadPopup
        open={showUploadDownloadPopup}
        isAboutUpload={isAboutUpload === null ? undefined : isAboutUpload}
        handleClose={() => {
          setShowUploadDownloadPopup(false);
          setIsAboutUpload(null);
        }}
        handleConfirm={
          isAboutUpload ? handleConfirmUpload : handleConfirmDownload
        }
      />
    </>
  );
};

export default TreeIconsRow;
