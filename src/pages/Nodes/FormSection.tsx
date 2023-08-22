import React, { useState } from 'react';
import ToggleButton from '../../app/common/buttons/ToggleButton';
import hideIcon from '../../assets/icons/hide.png';
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

const FormSection = () => {
  const [name, setName] = useState('');
  const [tags, setTags] = useState([
    { id: 'PLC', text: 'PLC' },
    { id: 'SCADA', text: 'SCADA' },
    { id: 'Siemens', text: 'Siemens' }
  ]);

  const handleTagClick = (index: number) => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  const handleDelete = (i: number) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag: { id: string; text: string }) => {
    setTags([...tags, tag]);
  };

  const handleToggleChange = (isActive: boolean) => {
    console.log('Toggle is now', isActive ? 'active' : 'inactive');
  };

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
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
        <img src={hideIcon} alt="new file" className="w-6 h-6 opacity-75" />
      </div>

      <div className="flex mt-5 space-x-2">
        <label className="w-24 mt-1 font-medium">Tags:</label>
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
          placeholder="Add properties"
          classNames={{
            tags: 'flex',
            tagInput: 'ml-2',
            tagInputField:
              'h-8 border rounded focus:outline-none focus:border-zinc-800',
            tag: 'h-8 bg-zinc-800 text-white rounded-full px-4 mr-2',
            remove: 'cursor-pointer ml-2 font-bold text-xl',
            selected: 'flex flex-wrap',
            suggestions:
              'bg-zinc-200 border border-black border-t-0 p-1 text-base text-black rounded'
            // activeSuggestion: 'font-bold'
          }}
        />
      </div>
    </div>
  );
};

export default FormSection;
