import React, { useEffect, useState } from 'react';

interface ToggleButtonProps {
  onChange: (isActive: boolean) => void;
  initialState?: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onChange,
  initialState = false
}) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    setIsActive(initialState);
  }, [initialState]);

  const toggleActive = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);
    onChange(newActiveState);
  };

  return (
    <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
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
        className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
          isActive ? 'bg-zinc-800' : 'bg-zinc-200'
        }`}
      >
        <span
          className={`${
            isActive ? 'translate-x-6' : ''
          } inline-block h-4 w-4 rounded-full bg-white transform transition-transform duration-200 ease-in ml-[-24px] mt-[4px]`}
        />
      </label>
    </div>
  );
};

export default ToggleButton;
