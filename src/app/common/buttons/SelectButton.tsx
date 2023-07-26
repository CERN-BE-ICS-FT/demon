import { useState, useRef, useEffect } from 'react';

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectButtonProps = {
  text: string;
  options: SelectOption[];
  onChange?: (value: string) => void;
  width?: string;
};

const SelectButton = ({
  text,
  options,
  onChange,
  width = 'w-44'
}: SelectButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(text);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (value: string, label: string) => {
    setSelectedOption(label);
    onChange && onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-flex" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex justify-between h-12 px-4 py-3 bg-white font-bold text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 mx-4 ${width}`}
      >
        {selectedOption} {isOpen && <p>&nbsp; ▲ </p>}{' '}
        {!isOpen && <p>&nbsp; ▼ </p>}
      </button>
      {isOpen && (
        <div
          className="absolute ml-4 z-10 mt-12 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          style={{ width: '100%' }}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option.value, option.label)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectButton;
