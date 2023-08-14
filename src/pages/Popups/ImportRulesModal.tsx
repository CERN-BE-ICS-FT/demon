import { useState } from 'react';
import Cross from '../../app/common/elements/Cross';

interface ImportRulesModalProps {
  open: boolean;
  handleClose: () => void;
}

const ImportRulesModal: React.FC<ImportRulesModalProps> = ({
  open,
  handleClose
}) => {
  const [search, setSearch] = useState('');
  const mockRules = [
    'Group 1 Rules XYZ',
    'Group 2 Rules ABC',
    'Group 3 Rules DEF'
  ]; // Add your own mock rules here

  if (!open) return null;

  // Filter rules based on search term
  const filteredRules = mockRules.filter((rule) =>
    rule.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-zinc-800 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-zinc-800"
                  id="username"
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />

                {filteredRules.map((rule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-zinc-200 p-3 rounded mt-4 w-[400px]"
                  >
                    <div className="font-medium">{rule}</div>
                    <button
                      onClick={handleClose}
                      className="bg-zinc-800 text-white px-3 rounded"
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-5 sm:mt-0 sm:ml-auto sm:mr-3 pl-4">
                <Cross onClick={handleClose} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportRulesModal;
