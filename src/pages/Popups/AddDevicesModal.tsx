import React from 'react';

interface AddDevicesPopupProps {
  open: boolean;
  numberOfItems: number;
  groupName: string;
  handleClose: () => void;
  handleConfirm: () => void;
}

const AddDevicesModal: React.FC<AddDevicesPopupProps> = ({
  open,
  numberOfItems,
  groupName,
  handleClose,
  handleConfirm
}) => {
  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20 bg-opacity-75 bg-zinc-400">
      <div className="bg-white p-4 rounded-lg text-center shadow-md">
        <h1 className="font-bold text-3xl pt-3">Add Items</h1>
        <p className="mt-4">
          {numberOfItems} item(s) will be added to {groupName}. Are you sure you
          want to proceed?
        </p>
        <div className="flex justify-center mt-4 pb-2 space-x-1">
          <button
            className="px-4 py-2 mr-2 border border-zinc-400 rounded"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 ml-2 bg-zinc-800 text-white rounded"
            onClick={() => {
              handleConfirm();
              handleClose();
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDevicesModal;
