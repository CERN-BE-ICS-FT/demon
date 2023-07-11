import { useState, useRef, useEffect } from 'react';

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectButtonProps = {
  text: string;
  options: SelectOption[];
  onChange?: (value: string) => void;
};

const SelectButton = ({ text, options, onChange }: SelectButtonProps) => {
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
    <div className="relative inline-flex min-w-fit w-fit" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center min-w-fit h-12 px-4 py-3 bg-white font-bold text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 mx-4"
      >
        {selectedOption} {isOpen && <p>&nbsp; ▲ </p>}{' '}
        {!isOpen && <p>&nbsp; ▼ </p>}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-12 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
