import { useState, useRef, useEffect } from 'react';
import arrowIcon from '../../../assets/icons/arrow-zinc-800.png';

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
    <div className={`relative inline-flex ${width}`} ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hover:backdrop-brightness-90 backdrop-filter relative text-left inline-flex items-center justify-start h-8 pl-2 bg-transparent border border-zinc-800 rounded-md ${width}`}
      >
        <span className="flex-grow truncate">{selectedOption}</span>
        <div className="inline-flex justify-between">
          <img
            className={`w-7 transform ${isOpen ? 'rotate-180' : ''}`}
            src={arrowIcon}
            alt="Arrow"
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-0 w-full z-10 rounded-md shadow-lg bg-white ring-1 ring-zinc-800 ring-opacity-5 focus:outline-none ">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option.value, option.label)}
                className="block w-full text-left px-4 hover:bg-zinc-200 hover:text-gray-900 rounded-md"
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
