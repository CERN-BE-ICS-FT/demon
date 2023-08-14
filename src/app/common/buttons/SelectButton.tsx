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
    <div className={`relative inline-flex ${width}`} ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center justify-between h-8 px-4 bg-white border border-zinc-200 rounded-md shadow-sm hover:bg-zinc-200 ${width}`}
      >
        {selectedOption}
        {isOpen ? <span>&nbsp; ▲ </span> : <span>&nbsp; ▼ </span>}
      </button>
      {isOpen && (
        <div className="absolute top-full mt-0 w-full z-10 rounded-md shadow-lg bg-white ring-1 ring-zinc-800 ring-opacity-5 focus:outline-none">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option.value, option.label)}
                className="block w-full text-left px-4 hover:bg-zinc-200 hover:text-gray-900"
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
