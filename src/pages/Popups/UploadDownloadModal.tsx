interface UploadDownloadPopupProps {
  open: boolean;
  isAboutUpload?: boolean; // Not specifying a type allows for undefined
  handleClose: () => void;
  handleConfirm: () => void;
}

const UploadDownloadPopup: React.FC<UploadDownloadPopupProps> = ({
  open,
  isAboutUpload,
  handleClose,
  handleConfirm
}) => {
  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20 bg-opacity-75 bg-gray-400">
      <div className="bg-white p-4 rounded-lg text-center shadow-md">
        <h1 className="font-bold text-3xl pt-3">Note!</h1>
        <p className="mt-4">
          {isAboutUpload
            ? 'You are about to upload the current state and override last saved state. Are you sure you want to proceed?'
            : 'You are about to fetch the last saved state. All current unsaved changes will be overdriven.'}
        </p>
        <div className="flex justify-center mt-4 pb-2 space-x-1">
          <button
            className="px-4 py-2 mr-2 border border-gray-400 rounded"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 ml-2 bg-blue-500 text-white rounded"
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

export default UploadDownloadPopup;
