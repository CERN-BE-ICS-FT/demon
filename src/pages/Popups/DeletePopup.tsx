import React from 'react';
import Cross from '../../app/common/elements/Cross';
import warningIcon from './warning.png';

interface DeletePopupProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  treeName: string;
}

const DeletePopup: React.FC<DeletePopupProps> = ({
  open,
  handleClose,
  handleConfirm,
  treeName
}) => {
  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20 bg-opacity-75 bg-gray-400">
      <div className="bg-white p-4 rounded-lg text-center shadow-md">
        <img src={warningIcon} alt="warning" className="mx-auto mt-4 w-8 h-8" />
        {/* <Cross onClick={handleClose} /> */}
        <p className="mt-4">
          Be careful, this action is permanent and cannot be reversed. You will
          lose the {treeName} tree forever.
        </p>
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 mr-2 border border-gray-400 rounded"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 ml-2 bg-red-500 text-white rounded"
            onClick={() => {
              handleConfirm();
              handleClose();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
