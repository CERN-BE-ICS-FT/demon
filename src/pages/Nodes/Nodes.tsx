import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ToggleButton from '../../app/common/buttons/ToggleButton';
import hideIcon from './hide.png';
import ICSTAGS from './icsTags';
import { WithContext as ReactTags } from 'react-tag-input';

const suggestions = ICSTAGS.map((tag) => {
  return {
    id: tag,
    text: tag
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Nodes = () => {
  const location = useLocation();
  const [nodeName, setGroupName] = useState('');
  const [name, setName] = useState('');
  const pathParts = location.pathname.split('/');
  const [tags, setTags] = useState([
    { id: 'PLC', text: 'PLC' },
    { id: 'SCADA', text: 'SCADA' },
    { id: 'Siemens', text: 'Siemens' }
  ]);

  const handleDelete = (i: number) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag: { id: string; text: string }) => {
    setTags([...tags, tag]);
  };

  const handleTagClick = (index: number) => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    setGroupName(decodeURIComponent(pathParts[3]));
  }, [location.pathname]);

  const handleToggleChange = (isActive: boolean) => {
    console.log('Toggle is now', isActive ? 'active' : 'inactive');
  };

  if (!pathParts[3]) {
    return (
      <div>
        <p className="mt-4">
          To edit the node, select a node on the tree view.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-lg pt-4 font-bold">{nodeName}</h1>
      <div className="text-zinc-600  mb-4">Device</div>

      <form className="space-y-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="name" className="w-24 font-medium">
            Name:
          </label>
          <input
            id="name"
            type="text"
            style={{ width: '25%' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-2 py-0 border rounded focus:outline-none focus:border-zinc-800"
          />
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="name" className="w-24 font-medium">
            Disable:
          </label>
          <ToggleButton onChange={handleToggleChange} />
          {/* <img src={showIcon} alt="new file" className="w-6 h-6" /> */}
          <img src={hideIcon} alt="new file" className="w-6 h-6 opacity-75" />
        </div>
      </form>

      <div className="pt-5 flex items-center">
        <label className="w-24 font-medium">Tags:</label>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleTagClick={handleTagClick}
          inputFieldPosition="inline"
          autocomplete={true}
          allowDragDrop={false}
          classNames={{
            tags: 'bg-zinc-200 p-2 rounded',
            tagInput: 'flex my-2',
            tagInputField:
              'px-2 py-0 border rounded focus:outline-none focus:border-zinc-800',
            // selected: 'flex flex-wrap',
            tag: 'bg-zinc-800 text-white rounded p-1 mr-2',
            remove: 'cursor-pointer ml-2 pr-1',
            suggestions: 'flex bg-zinc-800 text-white rounded p-1 mr-2'
            // activeSuggestion: 'bg-gray-300'
          }}
        />
      </div>
    </div>
  );
};

export default Nodes;
