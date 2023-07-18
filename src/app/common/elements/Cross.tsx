import React, { MouseEvent, FC } from 'react';
import { ReactComponent as CloseIcon } from './icons8-close.svg';

interface CrossProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Cross: FC<CrossProps> = ({ onClick }) => {
  return (
    <button
      className="bg-black rounded-full flex items-center justify-center text-black font-bold text-md w-8 h-8 mr-2"
      onClick={onClick}
    >
      <CloseIcon className="w-8 h-8" />
    </button>
  );
};

export default Cross;
