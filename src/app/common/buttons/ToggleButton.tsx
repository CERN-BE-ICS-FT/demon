import React, { useState } from 'react';

interface ToggleButtonProps {
  onChange: (isActive: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onChange }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
    onChange(!isActive);
  };

  return (
    <div className="relative inline-block w-14 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        checked={isActive}
        onChange={toggleActive}
        className="hidden"
      />
      <label
        htmlFor="toggle"
        className={`block overflow-hidden h-7 rounded-full cursor-pointer ${
          isActive ? 'bg-zinc-800' : 'bg-zinc-200'
        }`}
      >
        <span
          className={`${
            isActive ? 'translate-x-6' : ''
          } inline-block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in ml-[-24px] mt-[2px]`}
        />
      </label>
    </div>
  );
};

export default ToggleButton;
